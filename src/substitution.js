// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false //if there is no alphabet return false
    if (alphabet.length !== 26) return false //if less or grater then 26 return false

    const lowerInput = input.toLowerCase()
    let actualAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    let finalMessage = ''

    // check for duplicate letters in the alphabet
    let duplicates = {} // We are declaring a variable duplicates, and assinging to it an empty object

    for (let i = 0; i < alphabet.length; i++) {
      // We are looping through the alphabet and checking if the letter is in the duplicates object
      const letter = alphabet[i]
      // We are declaring a variable letter and assinging to it the value of the alphabet at the index of i
      if (duplicates[letter] === true) {
        // if the letter is already in the object, return false
        return false
      } else {
        // if the letter is not in the object, add it to the object
        duplicates[letter] = true // We are assinging the value true to the letter inside the duplicates object
      }
    }

    // encode or decode the message
    if (encode === true) {
      //encode the message
      for (let i = 0; i < lowerInput.length; i++) {
        const char = lowerInput[i]
        const index = actualAlphabet.indexOf(char)
        if (index === -1) {
          finalMessage += char
        } else {
          finalMessage += alphabet[index]
        }
      }
    } else {
      //decode the message
      for (let i = 0; i < lowerInput.length; i++) {
        const char = lowerInput[i]
        const index = alphabet.indexOf(char)
        if (index === -1) {
          finalMessage += char
        } else {
          finalMessage += actualAlphabet[index]
        }
      }
    }

    return finalMessage
  }
  return {
    substitution,
  }
})()

module.exports = { substitution: substitutionModule.substitution }
