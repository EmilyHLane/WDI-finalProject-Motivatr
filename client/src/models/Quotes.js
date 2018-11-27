import axios from "axios";

class QuotesModel {
  static all() {
    //get inspire quotes from They Said So api
    let request = axios.get("http://quotes.rest/qod.json?category=inspire");
    console.log(request);
    return request;
  }
}

export default QuotesModel;
