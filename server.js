const express = require('express')
const app = express()
const fs = require('fs')

const PORT = 3000

function sendFileContent(req, res) {
  const data = fs.readFile(`./contracts${req.route.path}`, 'utf8', (err, data) => {
    if (err) {
      throw new Error(err)
    }
    res.send(data)
  })
}

app.get('/Registry.json', sendFileContent)
app.get('/Parameterizer.json', sendFileContent)
app.get('/PLCRVoting.json', sendFileContent)
app.get('/HumanStandardToken.json', sendFileContent)

app.listen(PORT, () => console.log('Example app listening on port ' + PORT))
