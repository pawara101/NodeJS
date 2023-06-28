const http = require('http'); //Load HTTP model

http.createServer((request, response)=>{
    // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
    response.writeHead(200,{
        'Content-type': 'text/plain'
    });
    // 2. Write the announced text to the body of the page
    response.write('Hello World');
    console.log('----------')

    //  3. Tell the server that all of the response headers and body have been sent
    response.end();
}

).listen(3000);