# Warden Contracts
Tezos smart contracts for Warden.

![GitHub](https://img.shields.io/github/license/wardenfinance/contracts)
[![Node.js CI](https://github.com/wardenfinance/contracts/actions/workflows/node.js.yml/badge.svg)](https://github.com/wardenfinance/contracts/actions/workflows/node.js.yml)
[![CodeQL](https://github.com/wardenfinance/contracts/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/wardenfinance/contracts/actions/workflows/codeql-analysis.yml)

## Static

Contracts in the _static_ directory are meant for single use-cases. For example, the **escrow** contract can be deployed by anyone when needed - once that contract has outlived its purpose, it will no longer be used.

## Dynamic

Contracts in the _dynamic_ directory are meant for continued use. For example, the **warden** contract is deployed once and used forever - until an update is necessary.