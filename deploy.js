const { TezosToolkit } = require('@taquito/taquito');
const { importKey } = require('@taquito/signer');
const { existsSync, readFileSync } = require('fs');
const { join } = require('path');

const contractName = process.argv[2];

let subdirName;
switch(contractName) {
    case 'auction':
    case 'escrow':
        subdirName = 'dynamic';
        break;
    default:
        throw new Error('Contract name must be one of: auction, escrow');
}

const basePath = join(__dirname, subdirName, contractName);
const michelsonPath = join(basePath, `${contractName}.tz`);
const michelsonStoragePath = join(basePath, `${contractName}.storage.tz`);
if (!existsSync(michelsonPath) || !existsSync(michelsonStoragePath)) throw new Error(`No compiled michelson code found in paths ${michelsonPath} and ${michelsonStoragePath}.`);

const michelsonCode = readFileSync(michelsonPath).toString('utf-8');
const michelsonStorageCode = readFileSync(michelsonStoragePath).toString('utf-8');

const network = process.argv[3];
if (!network || !['mainnet', 'testnet', 'edonet', 'florencenet'].includes(network) === 0) throw new Error('No network passed in as an argument.');

let rpcUrl;
switch(network) {
    case 'mainnet':
        rpcUrl = 'https://mainnet-tezos.giganode.io';
        break;
    case 'testnet':
    case 'edonet':
        rpcUrl = 'https://testnet-tezos.giganode.io';
        break;
    case 'florencenet':
        rpcUrl = 'https://florencenet-tezos.giganode.io';
        break;
}

const privateKey = process.argv[4];
if (!privateKey || privateKey.length === 0) throw new Error('No private key passed in as an argument.');

async function deploy() {
    const tezos = new TezosToolkit(rpcUrl);


    try {
        await importKey(tezos, privateKey);
        const originator = await tezos.signer.publicKey();

        console.log(`Originating contract from signer: ${originator}...`);
        const operation = await tezos.contract.originate({
            code: michelsonCode,
            init: michelsonStorageCode
        });
        console.log(`Origination operation at ${operation.contractAddress} consumed ${operation.consumedGas} gas.`);

        console.log(`Awaiting operation confirmation...`);
        const confirmation = await operation.confirmation();
        console.log(`Confirmation completed. ${confirmation}`);
    } catch(e) {
        console.error(e);
    }
}

try {
    deploy();
} catch(e) {
    console.error(e);
}
