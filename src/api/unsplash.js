import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e3ae7c392a8114ed802e722a5901d0e6a7748bbbccc94474eab33c9d55d642da"
  }
});
