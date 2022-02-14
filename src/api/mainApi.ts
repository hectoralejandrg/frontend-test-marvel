import axios from "axios";
import { Md5 } from "md5-typescript";

const ts = Date.now();

const mainApi = axios.create({
  baseURL: "http://gateway.marvel.com",
  params: {
    ts,
    apikey: `c1a06631b49b57ab27137204d5427df3`,
    hash: Md5.init(
      `${ts}f93e8694f35cdea3d7304cb5a09392d69cde8d52c1a06631b49b57ab27137204d5427df3`
    ),
  },
});

export default mainApi;
