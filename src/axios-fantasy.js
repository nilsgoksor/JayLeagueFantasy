import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com"
});

export default instance;
