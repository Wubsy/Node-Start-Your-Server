let http = require('http')
let htmlData = '<h1>Bark!</h1><img src="https://httpstatusdogs.com/206-partial-content" alt="206">'
let server = http.createServer(function (req,res) {
    res.writeHead(206)
    res.write(htmlData)
    res.end()
})

server.listen(3000, function () {
    console.log("I am awake!")
})