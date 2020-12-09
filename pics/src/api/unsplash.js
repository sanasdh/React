import axios from 'axios'
const CLIENTID = process.env.CLIENTID;

// create method will create an instance of the axios client with a couple of defaulted properties => it'll allow us to create a customized little copy of it, that is customized just towards making requests to some specific URL with just our headers
export default axios.create({
  baseURL:'https://api.unsplash.com',
headers:{
  Authorization: {CLIENTID}
  }
})