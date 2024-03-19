function inverterString(string) {
    let invertedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        invertedString += string[i];
    }
    return invertedString;
}

const stringOriginal = "Hello, world!";
const stringInvertida = inverterString(stringOriginal);
console.log("String Original:", stringOriginal);
console.log("String Invertida:", stringInvertida);
