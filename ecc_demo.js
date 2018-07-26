
//import ecc from 'eosjs-ecc'
const ecc = require('eosjs-ecc')

console.log("ecc demo");

// 获取秘钥对，签名，验签.
ecc.randomKey().then(privateKey => {
    console.log('Private Key:\t', privateKey)

    var pubkey = ecc.privateToPublic(privateKey)
    console.log('Public Key:\t', pubkey)
    var signature = ecc.sign('I am alive', privateKey)
    console.log('signature:\t', signature)

    var ret = ecc.verify(signature, 'I am alive', pubkey)
    if (ret == true) {
        console.log('verfiy:success\t')
    } else {
        console.log('verfiy:failed!\t')
    }
    
    console.log("ecc demo exit.");
})












