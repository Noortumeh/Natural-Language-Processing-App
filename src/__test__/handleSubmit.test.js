// Import the js file to test
const { handleSubmit } = require("../client/js/formHandler");

beforeEach(() => {
    // إعداد DOM
    document.body.innerHTML = `
      <form id="urlForm">
        <input type="text" id="name" />
        <div id="results"></div>
      </form>
    `;
  });
describe('handleSubmit is successful', () => {
    test('returns something', () => {
        expect(handleSubmit).toBeDefined();
    });
});