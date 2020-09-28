require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture stomach razor predict undo harvest bag army giggle'; 
let testAccounts = [
"0x9aaa3d3dbb9e1110ce209554d37dd228baa23f2af46f52405939a0fa6e6da2ae",
"0x40405769f7575bfd9012717bbc1fc10b222c1242e283a21bfbac5e6b41f2faac",
"0x974581d6117eec4e833e8c12add85bbe0318079fbf08aa891ab743c50b130984",
"0x6735a86d8b24f1102333da754f738df5f13164d9e3713eaecacc8721e9ab37f7",
"0xeb21eb151a0c63aceb8fa215c259fc8f9e709c38bc19bf1e7dedefa843fedcc1",
"0x85746e2e2cc0ceb07fc49aec96d2dcfd30381f5367d09cc557929d835a6f74cf",
"0x8e2ac161561b1771ff8705a1dca30dbb2485ad8107e32a3adcbf5ea3a3386fc0",
"0x7ed19ab74d67debca2d499b1b705218508b5ec989cfc7d7aebca7285efa9ccd0",
"0xc7220d8576f15289340a77fcd751659460748e241f3323a73b5e14d73322410f",
"0xeb2c8f681fbca6b9b8531e84d48848802d23ae6aa5b16014051842e40901f92c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
