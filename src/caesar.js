// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false
    }

    if (!encode) shift *= -1 //if decoding, multiplying shift value to make it negative num, which is how we get our shift when we need to decode.

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let lowerCaseinput = input.toLowerCase() //make all characters in input lower case

    return lowerCaseinput
      .split('')
      .map((letter) => {
        if (alphabet.includes(letter)) {
          if (alphabet.indexOf(letter) + shift < 0) {
            return alphabet[alphabet.indexOf(letter) + shift + 26]
          }

          if (alphabet.indexOf(letter) + shift > 25) {
            return alphabet[alphabet.indexOf(letter) + shift - 26]
          }

          return alphabet[alphabet.indexOf(letter) + shift]
        } else {
          return letter
        }
      })
      .join('')
  }

  return {
    caesar,
  }
})()

module.exports = { caesar: caesarModule.caesar }
