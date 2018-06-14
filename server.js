const express = require('express')
const app = express()
const fs = require('fs')

const PORT = process.env.PORT || 3000

app.get('/Registry.json', sendFileContent)
app.get('/Parameterizer.json', sendFileContent)
app.get('/PLCRVoting.json', sendFileContent)
app.get('/HumanStandardToken.json', sendFileContent)

function sendFileContent(req, res) {
  const data = fs.readFile(`./contracts${req.route.path}`, 'utf8', (err, data) => {
    if (err) {
      throw new Error(err)
    }
    res.send(data)
  })
}

app.listen(PORT, () => console.log('Example app listening on port ' + PORT))
