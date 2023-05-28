export default function generateText(length: number) {
    const letters = "asdfjkl;"
    const getRandomLetter = () => {
        return letters[Math.floor(Math.random() * letters.length)];
    };
    let text = '';
    for (let i = 0; i < length; i++) {
        let word = '';
        const wordLength = Math.floor(Math.random() * 5) + 1;
        for (let j = 0; j < wordLength; j++) {
            word += getRandomLetter();
        }
        text += word + ' ';
    }
    return text.trim();

}
