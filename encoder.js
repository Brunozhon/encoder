var letters = [
  "a", "b", "c", "d", "e",
  "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y",
  "z"
]
var uppercaseLetters = [
  "A", "B", "C", "D", "E",
  "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O",
  "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y",
  "Z"
]
function encodeSteps(str, steps) {
  var result = ""
  for (let letter of str) {
    if (letters.indexOf(letter) < 0 || uppercaseLetters.indexOf(letter) < 0) {
      // It's a space, a number, or a symbol.
      result += letter
    } else {
      if (letters.indexOf(letter) > 0) {
        let _letter;
        for (let i = 0; i < steps; i++) {
          if ((letters.indexOf(letter) + 1) > 25) {
            letter = "a"
          }
          letter = letters[letters.indexOf(letter) + 1]
          _letter = letter
        }
        result += _letter
      } else {
        let _letter;
        for (let i = 0;, i < steps; i++) {
          if ((uppercaseLetters.indexOf(letter) + 1) > 25) {
            letter = "A"
          }
          letter = uppercaseLetters[uppercaseLetters.indexOf(letter) + 1]
          _letter = letter
        }
        result += _letter
      }
    }
  }
  return result
}
