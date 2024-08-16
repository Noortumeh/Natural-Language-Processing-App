// Replace checkForName with a function that checks the URL
import { validateURL } from "./checkURL";
const serverURL = "http://localhost:8000/";
// we need to call addEventListener in submit just after the dom be loaded
window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("urlForm");
  if (form) {
    form.addEventListener("submit", handleSubmit);
  }
});
function handleSubmit(event) {
  event.preventDefault();
  // Get the URL from the input field
  const formText = document.getElementById("name").value;
  // Check if the URL is valid
  if(!validateURL(formText)){
    showError("Please, enter a valid URL");
    return;
  }
  // If the URL is valid, send it to the server using the serverURL constant above
  postData(serverURL, { url: formText });
}
// Function to send data to the server
const postData = async (url = "", data = {}) => {
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
    const newData = await res.json();
    // Display the error message
    if(newData.msg){
      showError(newData.msg);
      return;
    }
    // Display the sentiment analysis results
    showResults(newData.sample);
    
};
const showError = (msg) => {
    const results = document.querySelector("#results");
    results.innerHTML = `<p class="error">${msg}</p>`;
};
const showResults = (sample) => {
  const results = document.querySelector("#results");
  results.innerHTML = `
    <p>Agreement: ${sample.agreement}</p>
    <p>Subjectivity: ${sample.subjectivity}</p>
    <p>Confidence: ${sample.confidence}</p>
    <p>Score Tag: ${sample.score_tag}</p>
    <p>Irony: ${sample.irony}</p>
  `;
};
// Export the handleSubmit function
export { handleSubmit };