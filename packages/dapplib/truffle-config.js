require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift riot machine evil idea civil army gentle'; 
let testAccounts = [
"0xe84ae929a2ebb218e0168f404b4f10af70343ddefa2f6ef65fdb84c5d106b514",
"0xa14de04704d034dff087efc58c0f10bfe2156eb53d69c6cd61772f6183889cd5",
"0x07752f0ea73733576bd94563ad042314f38f254ee204d3786ca395a1e95a5bea",
"0xbbb8b2a4c307cee90e0b62d5b2cde109b89f6f158c15a2a5496281bb6c69f88d",
"0x4e8dfbe64101dbdc1fca37c93bc1442a8f6126f62ee959facbf24fe02210481d",
"0x7475734474e3a81a36c38437c7e54b61bf190ef8873d7e022eec7e3235df8f5d",
"0xaef313a7b138f9011e76a9d98c51803a2066a78424f0a9c0c7f1f8cc71f62fda",
"0x58700ed78a616b9cc3ab9ebba2e9dfd7613569f6e0df370cc55dc927bfa82325",
"0x3cb4aa37cbc9fc858c7350429deb4b1982ec55830b79930b90501c177894845b",
"0xd243ceb18c900b397895cf61c0d73234ca5e40e847580569e84310c9b5ab8b46"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


