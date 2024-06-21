const fs = require('fs');
const csv = require('csv-parser');

function replacePhrases(sentence, abbreviationDict) {
    let lowerCaseSentence = sentence.toLowerCase();

    const sortedPhrases = Object.keys(abbreviationDict).sort((a, b) => b.length - a.length);

    const pattern = new RegExp(sortedPhrases.map(phrase => `\\b${phrase}\\b`).join('|'), 'gi');

    lowerCaseSentence = lowerCaseSentence.replace(pattern, match => {
        const lowerCaseMatch = match.toLowerCase();
        return abbreviationDict[lowerCaseMatch];
    });

    return lowerCaseSentence;
}
function abbrevify(sentence) {
    return new Promise((resolve, reject) => {
        const abbreviationDict = {};

        fs.createReadStream('./csv/abbreviation_processed.csv')
            .pipe(csv())
            .on('data', (row) => {
                const abbreviation = row.Abbreviation ? row.Abbreviation.trim() : null;
                const fullPhrase = row.Meaning ? row.Meaning.trim() : null;

                if (abbreviation && fullPhrase) {
                    abbreviationDict[fullPhrase.toLowerCase()] = abbreviation;
                }
            })
            .on('end', () => {
                const abbreviatedSentence = replacePhrases(sentence.toLowerCase(), abbreviationDict);
                resolve(abbreviatedSentence);
            })
            .on('error', (err) => {
                reject(err);
            });
    });
}
module.exports = {
    abbrevify
};
