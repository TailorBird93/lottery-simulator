const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../pages/lotto.html'), 'utf8');

describe('Lotto Game', () => {
  let dom;
  let document;

  beforeEach(() => {
    dom = new JSDOM(html);
    document = dom.window.document;
    global.document = document;
  });

  test('should have a form with number inputs and a play button', () => {
    const form = document.querySelector('#lotto-form');
    expect(form).toBeTruthy();

    const numberInputs = document.querySelectorAll('.lotto-number');
    expect(numberInputs.length).toBe(6);

    const playButton = document.querySelector('#play-button');
    expect(playButton.textContent).toBe('Play');
  });

  test('should have a result and summary div', () => {
    const resultDiv = document.querySelector('#result');
    expect(resultDiv.textContent).toBe('Current Game Result:');

    const summaryDiv = document.querySelector('#summary');
    expect(summaryDiv.textContent).toBe('Summary:');
  });
});