# Abbreviation Utility

This Node.js module provides a utility for abbreviating phrases based on a CSV dictionary.

## Installation

You can install the package via npm:

```bash
npm install abbrevify
```
## Usage
# Example

```
const { abbrevify } = require('your-package-name');

async function processSentence() {
    try {
        const sentence = "I love you so much. It's true!";
        const abbreviatedSentence = await abbrevify(sentence);
        console.log('Original Sentence:', sentence);
        console.log('Abbreviated Sentence:', abbreviatedSentence);
    } catch (error) {
        console.error('Error:', error);
    }
}

processSentence();
```
## CSV Dictionary Format
The module expects a CSV file (abbreviation_processed.csv) with two columns:
<ul>
  <li>Abbreviation: The abbreviation for the phrase.</li>
  <li>Meaning: The full phrase to be abbreviated.</li>
</ul>

Example CSV content:
```
Abbreviation,Meaning
ILUSM,I love you so much
YAA,yet another acronym
abbr,abbreviation
auto,automatic
ex,example
```
Ensure your CSV file is formatted correctly for accurate abbreviation.

## Contributing
Contributions are welcome! If you have improvements or feature requests, feel free to submit an issue or pull request.

