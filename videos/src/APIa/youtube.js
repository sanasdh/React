import axios from 'axios'
const KEY = process.env.REACT_APP_KEY;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video', //won't see anyplay list
    maxResults: 7,
    key: KEY,
  }
})