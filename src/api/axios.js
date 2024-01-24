import axios from "axios";

const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  params:{
    api_key:"8287c4be565584363a6d33933fc7ac53",
    language:"ko-KR"
  }
})

export default instance;