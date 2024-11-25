const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function caesarEncrypt(text, shift) {
    return text.split('').map(char => {
        let index = alphabet.indexOf(char);
        if (index === -1) return char; 
        let newIndex = (index + shift) % alphabet.length;
        if (newIndex < 0) newIndex += alphabet.length;
        return alphabet[newIndex];
    }).join('');
}

function caesarDecrypt(text, shift) {
    return caesarEncrypt(text, -shift);
}


let originalText = 'Hello, World!';
let shift = 3;

let encryptedText = caesarEncrypt(originalText, shift);
console.log('Зашифрований текст:', encryptedText);

let decryptedText = caesarDecrypt(encryptedText, shift);
console.log('Розшифрований текст:', decryptedText);