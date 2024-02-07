import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params:{
  key:'15fdb01cc4824ecda57235420ecfbb58'
  }
})