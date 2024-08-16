// const test = "https://api.openweathermap.org/data/2.5/weather?zip=4000,&appid=962229b4b6fab0d2c0a4cde8e50b8042&units=imperial"
const meaningCloud = 'https://api.meaningcloud.com/sentiment-2.1';
const axios = require("axios");
// here i try two ways to test something but i continue by axios
const analyze = async (url, key) => {
    const res = await axios.get(`${meaningCloud}?key=${key}&url=${url}&LANG=EN`)
    .then(data =>{
      const {code} = data.data.status;
      const {msg} = data.data.status;
      if(code == 100){
        return handleError(code, "Please, enter a valid url");
      }
      else if(code == 212){
        return handleError(code, msg);
      }
      else {// code is 0
        return handleSuccess(data.data, code);
      }
  });
  return res;
};
const handleError = (code, msg) => {
    const error ={
      code,
      msg
    }
    return error;
};
const handleSuccess = (data, code) => {
    const {agreement, subjectivity, confidence, score_tag, irony} = data;
    const sample = {
      agreement,
      subjectivity,
      confidence,
      score_tag,
      irony,
    }
    const result = {sample, code};
    return result;
};
module.exports = { analyze };
//? another way to fetch data from the API
// const analyze = async (url, key) => {
//   const res = await fetch(`${meaningCloud}?key=${key}&url=${url}&lang=EN`);
//   try {
//       const data = await res.json();
//       console.log(data); 
//       return data;
//   } catch (err) {
//       console.log("get error", err);
//   }
// };