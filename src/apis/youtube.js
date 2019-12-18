import axios from 'axios';

const KEY = 'AIzaSyDcJQI0cFQ3yhT31H3DcS6wGxMf8NlUV1w';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
});

