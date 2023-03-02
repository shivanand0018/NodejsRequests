const http=require('http')

var server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/home')
    {
        res.write('<html><head><h3>Welcome to Home</h3></head></html>')
        res.end();
    }
    else if(url==='/about')
    {
        res.write('<html><head><h3>Welcome to About Us Page</h3></head></html>')
        res.end();
    }
    else if(url==='/node')
    {
        res.write('<html><head><h3>Welcome to Node Js Page</h3></head></html>')
        res.end();
    }
})
server.listen('3000')