function validateRequest(request) {
    let message = "Invalid request header: Invalid ";
    methods = ["GET", "POST", "DELETE", "CONNECT"];
    if (!request.method || !methods.includes(request.method)) {
        throw Error(message + "Method");   
    }

    let uriRegex = /^([\w\.]+)$|^(\*)$/g;
    if (!request.uri || !uriRegex.test(request.uri)) {
        throw Error(message + "URI");
    }

    let versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    if (!request.version || !versions.includes(request.version)) {
        throw Error(message + "Version");
    }

    let messageRegex = /^[^<>\\&'"]*$/g;
    if (request.message === undefined || !messageRegex.test(request.message)) {
        throw Error(message + "Message");
    } 
    
    return request;
}
