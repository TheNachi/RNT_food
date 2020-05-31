import axios from "axios";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer yjhaa_RvuDU3N4WpbsX-4Ize_LsFdfbhxtsTE0xLkxEzOTHT-q5hHxVF6qTNdXCf6CvJBXMlCG5ScI5a_eJEDbPB2MuaVLVGwuneRQymRbdw5qhrRVJoFIr3loLMXnYx'
  }
});
