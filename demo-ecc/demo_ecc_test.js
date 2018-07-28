
const ecc = require('../ecc/api_common.js')

// 获取秘钥对，签名，验签.
function ecc_test() {
    console.log("ecc_test.");

	ecc.randomKey().then(privateKey => {
	    console.log('Private Key:\n', privateKey)

	    var pubkey = ecc.privateToPublic(privateKey)
	    console.log('Public Key:\n', pubkey)
	    var signature = ecc.sign('I am alive', privateKey)
	    console.log('signature:\n', signature)

	    var ret = ecc.verify(signature, 'I am alive', pubkey)
	    if (ret == true) {
			console.log('verfiy:success\n')
	    } else {
			console.log('verfiy:failed!\n')
	    }
        return signature
	})
}

function ecc_test2() {

	var privateKey = "5KL1GQKy2N1Vnx9b3WdYXtjbpdMpU5BiWgeZhL4rWjvkeiPFtKg";//ecc.randomKey();
	console.log("privateKey:\t", privateKey);

	var pubkey = ecc.privateToPublic(privateKey)
	console.log('Public Key:\t', pubkey)

	var signature = ecc.sign('1234567890', privateKey)
	console.log('signature1:\t', signature)

    //var ret = ecc.verify(signature, '1234567890', pubkey)
    var ret = ecc.verify(signature, '1234567890', pubkey)
	if (ret == true) {
        console.log('verfiy:success\n')
	}
	else {
        console.log('verfiy:failed\n')
	}

}



ecc_test2()

exports.test = ecc_test;









