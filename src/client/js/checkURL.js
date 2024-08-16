// here i use a backege to check if the url is valid
const valid = require('valid-url');
// check if the url is valid
const isValid = (url) => Boolean(valid.isWebUri(`${url}`));
// Function to validate a URL
const validateURL = (url) => {
    return isValid(url);
}

export { validateURL };