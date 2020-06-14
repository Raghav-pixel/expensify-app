const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

publicDirectoryPath = path.join(__dirname, '..', 'public')
app.use(express.static(publicDirectoryPath))

app.get('*', (req, res)=> {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'))
});

app.listen(port, ()=>{
    console.log(`listening to ${port}`)
});