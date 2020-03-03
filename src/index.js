const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let morse_string = '';
    let result = ''; 
    let a = expr.split('');
    for (let i = 1; i < expr.length; i++) {
        if (a[i] == '0' && a[i - 1] == '1') {
            morse_string += '.';
            if (i % 10 == 9) {
                morse_string += ',';
            }
            i += 1;
        }
        else if (a[i] == '1' && a[i - 1] == '1') {
            morse_string += '-';
            if (i % 10 == 9) {
                morse_string += ',';
            }
            i += 1;
        }
        else if (a[i] == '*' && a[i - 1] == '*') {
            morse_string += ' ,';
            if (i % 10 == 9) {
                morse_string += ',';
            }
            i += 9;
        }
        else if (a[i] == '*' && a[i - 1] != '*') {
            morse_string += ' ,';
            if (i % 10 == 9) {
                morse_string += ',';
            }
            i += 10;
        }
        else if (a[i] == '0' && a[i - 1] == '0') {
            if (i % 10 == 9) {
                morse_string += ',';
            }
            i += 1;
        }
    }
    let morse_words = morse_string.split(',');
    for (let j = 0; j < morse_words.length - 1; j++) {
        if (morse_words[j] == ' '){
            result += ' ';
            j++;
        }
        result +=  MORSE_TABLE[morse_words[j]];
    }
    return result;
}

module.exports = {
    decode
}