var letters = [
  "a", "b", "c", "d", "e",
  "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o",
  "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y",
  "z"
]
function encodeSteps(str, steps) {
  var result = ""
  for (let letter of str) {
    if (letters.indexOf(letter) < 0) {
      // It's a space, a number, or a symbol.
      result += letter
    } else {
      for (let i = 0; i < steps; i++) {
        if ((letters.indexOf(letter) + 1) > 25) {
          letter = "a"
        }
        letter = letters[letters.indexOf(letter) + 1]
      }
      result += letter
    }
  }
  return result
}
