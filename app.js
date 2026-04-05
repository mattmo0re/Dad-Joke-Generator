// app.js

function generateJoke() {
    const nouns = ['teeth', 'books', 'hats', 'pencils', 'bikes'];
    const verbs = ['buy', 'get', 'find', 'sell', 'trade'];
    const punchlines = ['Buck teeth!', 'A good read!', 'Stylish headwear!', 'Writing tools!', 'A great ride!'];

    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomPunchline = punchlines[Math.floor(Math.random() * punchlines.length)];

    return `What kind of ${randomNoun} can you ${randomVerb} for a dollar? … ${randomPunchline}`;
}

console.log(generateJoke());