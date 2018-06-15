const express = require('express')
const app = express()
const fs = require('fs')

const PORT = process.env.PORT || 4000

app.get('/Registry.json', sendFileContent)
app.get('/Parameterizer.json', sendFileContent)
app.get('/PLCRVoting.json', sendFileContent)
app.get('/HumanStandardToken.json', sendFileContent)

function sendFileContent(req, res) {
  fs.readFile(`./contracts${req.route.path}`, 'utf8', (err, data) => {
    if (err) {
      throw new Error(err)
    }
    const jsonData = JSON.parse(data)
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.json(jsonData)
  })
}

app.listen(PORT, () => console.log('Example app listening on port ' + PORT))
