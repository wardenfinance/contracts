const { exec } = require('child_process');
const { existsSync } = require('fs');
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
const inputPath = join(basePath, `${contractName}.arl`);
const metadataPath = join(basePath, `${contractName}.json`);
if (!existsSync(inputPath)) throw new Error(`${contractName}.arl does not exist`);

async function compile(targetName, targetExt) {
    try {
        await new Promise((resolve, reject) => {
            const outputPath = join(basePath, `${contractName}.${targetExt}`);
            const command = `archetype -t ${targetName} ${inputPath} --metadata-storage ${metadataPath} > ${outputPath}`;
            exec(command, (error, stdout) => {
                if (error) reject(error);
                else resolve(stdout);
            });
        });
    } catch(e) {
        console.error(e);
    }
}

const targets = {
    'michelson': 'tz',
    'michelson-storage': 'storage.tz',
    'markdown': 'md',
    'whyml': 'mlw'
};

Promise.all(Object.keys(targets).map(targetName => {
    const targetExt = targets[targetName];
    return compile(targetName, targetExt);
}));
