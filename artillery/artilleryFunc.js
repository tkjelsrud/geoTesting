function printStatus (requestParams, response, context, ee, next) {
    console.log(`${response.statusCode}`);  

    body = response.body;
    if(!body.startsWith('{"objectIdFieldName"') && !body.startsWith('{"currentVersion":')) {
        console.log(body);
    }
    
    return next();
}

module.exports = {
    printStatus: printStatus
}