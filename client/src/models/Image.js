import axios from "axios";
const key = "394a69ff5a00a7ecd7a2d9077ebe7ff6ed0ad6b93c40969200b171422519d3e9";
const unsplash = "https://api/unsplash.com/photos/random/?client_id=";

class ImageModel {
  static all() {
    let request = axios.get(`${unsplash}${key}`);
    console.log(request);
    return request;
  }
}

export default ImageModel;
