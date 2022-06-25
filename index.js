const express = require('express')
const cors = require('cors')

const app = express()

app.listen('8080', () => {console.log('success')})

app.use(express.json())
app.use(cors())

/* === 登录注册 */
app.post('/douyin/user/register/', (req, res) => {
  console.log(req.query)
  const dataObj = {
    status_code: 0,
    status_msg: '注册成功',
    user_id: 0,
    token: 'abc',
  }
  res.status(200)
  res.send(JSON.stringify(dataObj))  
})
app.post('/douyin/user/login/', (req, res) => {
  console.log(req.query)
  const dataObj = {
    status_code: 0,
    status_msg: '成功',
    user_id: 0,
    token: 'abc',
  }
  res.status(200)
  res.send(JSON.stringify(dataObj))
})
app.get('/douyin/user/', (req, res) => {
  console.log(req.query)
  const dataObj = {
    status_code : 0,
    status_msg: 'success',
    user : {
      id: '0',
      name: 'linhieng',
      follow_count: 10,
      follower_count: 1,
      is_follow: true
    }
  }
  res.status(200)
  res.send(JSON.stringify(dataObj))
})

/* 关注 / 粉丝 */
app.get('/douyin/relation/follow/list/', (req, res) => {
  console.log(req.query)
  const dataObj = {
    status_code: 0,
    status_msg: 'success',
    user_list: [
      {
        id: 1,
        name: 'love01',
        follow_count: 4,
        follower_count: 2,
        is_follow: false,
      }
    ]
  }
  res.status(200)
  res.send(JSON.stringify(dataObj))
})
app.get('/douyin/relation/follower/list/', (req, res) => {
  console.log(req.query)
  const dataObj = {
    status_code: 0,
    status_msg: 'success',
    user_list: [
      {
        id: 1,
        name: 'loveMe01',
        follow_count: 2,
        follower_count: 4,
        is_follow: true,
      }
    ]
  }
  res.status(200)
  res.send(JSON.stringify(dataObj))
})

/* 视频 */
app.get('/douyin/feed/', (req, res) => {
  console.log(req.query)
  const dataObj = {
    status_code: 0,
    status_msg: 'success',
    next_time: 5201314,
    video_list: [
      {
        id: 0,
        author: {
          id: 0,
          name: 'linhieng',
          follow_count: 10,
          follower_count: 1,
          is_follow: true,
        },
        play_url: 'http://itaem.cn/test.mp4',
        cover_url: 'http://112.74.73.147/1645008588830-c62e8fb48ebedc30c107f184c8dee6b8_1.jpg',
        favorite_count: 1000,
        comment_count: 2000,
        is_favorite: true,
      }
    ]
  }
  res.status(200)
  res.send(JSON.stringify(dataObj))
})
app.get('/douyin/publish/list/', (req, res) => {
  console.log(req.query)
  const dataObj = {
    status_code: 0,
    status_msg: 'success',
    video_list: [
      {
        id: 1,
        author: {
          id: 0,
          name: 'linhieng',
          follow_count: 10,
          follower_count: 1,
          is_follow: true,
        },
        play_url: 'http://itaem.cn/test.mp4',
        cover_url: 'http://112.74.73.147/1645008588830-c62e8fb48ebedc30c107f184c8dee6b8_1.jpg',
        favorite_count: 1000000,
        comment_count: 2000,
        is_favorite: true,
      }
    ]
  }
  res.status(200)
  res.send(JSON.stringify(dataObj))
})
app.get('/douyin/favorite/list/', (req, res) => {
  console.log(req.query)
  const dataObj = {
    status_code: 0,
    status_msg: 'success',
    video_list: [
      {
        id: 1,
        author: {
          id: 0,
          name: 'linhieng',
          follow_count: 10,
          follower_count: 1,
          is_follow: true,
        },
        play_url: 'http://itaem.cn/test.mp4',
        cover_url: 'http://112.74.73.147/1645008588830-c62e8fb48ebedc30c107f184c8dee6b8_1.jpg',
        favorite_count: 1000000,
        comment_count: 2000,
        is_favorite: true,
      },
      {
        id: 1,
        author: {
          id: 0,
          name: 'linhieng',
          follow_count: 10,
          follower_count: 1,
          is_follow: true,
        },
        play_url: 'http://itaem.cn/test.mp4',
        cover_url: 'http://112.74.73.147/1645008588830-c62e8fb48ebedc30c107f184c8dee6b8_1.jpg',
        favorite_count: 1000000,
        comment_count: 2000,
        is_favorite: true,
      },
    ]
  }
  res.status(200)
  res.send(JSON.stringify(dataObj))
})

app.get('*', (req, res) => {
  res.send('hello')
})
