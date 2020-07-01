'use strict';

module.exports.soma = async event => {
    let a = 0;
    let b = 0;
    if (event.queryStringParameters && event.queryStringParameters.a) {
        a = parseInt(event.queryStringParameters.a) || 0;
    }

    if (event.queryStringParameters && event.queryStringParameters.b) {
        b = parseInt(event.queryStringParameters.b) || 0;
    }

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                resultado: a + b
            },
            null,
            2
        ),
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
