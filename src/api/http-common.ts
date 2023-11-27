import axios from "axios";
import getCurrentLang from "utils/getCurrentLang";

export default axios.create({
  baseURL: `${process.env.REACT_APP_API_HOST}/${getCurrentLang()}`,
});
