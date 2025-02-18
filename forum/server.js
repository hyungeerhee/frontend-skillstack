const { log } = require('console')
const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

const { MongoClient } = require('mongodb')

let db
const url =
  'mongodb+srv://admin:1234@hyungeerhee.1i0vd.mongodb.net/?retryWrites=true&w=majority&appName=hyungeerhee'
new MongoClient(url)
  .connect()
  .then((client) => {
    console.log('DB연결성공')
    db = client.db('forum')
    app.listen(8080, () => {
      console.log('http://localhost:8080 에서 서버 실행 중')
    })
  })
  .catch((err) => {
    console.log(err)
  })

app.get('/', (요청, 응답) => {
  응답.sendFile(__dirname + '/index.html')
})

app.get('/news', (요청, 응답) => {
  // db.collection('post').insertOne({ title: '어쩌구' })
  응답.send('오늘 비옴')
})

app.get('/list', async (요청, 응답) => {
  let result = await db.collection('post').find().toArray()
  console.log(result)
  응답.send('DB에 있던 게시물')
})
