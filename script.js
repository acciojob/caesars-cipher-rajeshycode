function rot13(str) {
  // Initialize an empty string to store the decoded result
  let decodedStr = '';

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Get the current character
    const char = str[i];

    // Check if the character is an uppercase letter
    if (/[A-Z]/.test(char)) {
      // Convert the character code to a number between 0 and 25
      const charCode = char.charCodeAt(0) - 'A'.charCodeAt(0);

      // Apply the ROT13 transformation (shift by 13)
      const decodedCharCode = (charCode + 13) % 26;

      // Convert the decoded character code back to a character and append it to the result
      decodedStr += String.fromCharCode(decodedCharCode + 'A'.charCodeAt(0));
    } else {
      // If the character is not an uppercase letter, pass it through unchanged
      decodedStr += char;
    }
  }

  // Return the decoded string
  return decodedStr;
}

// Example usage:
const encodedString = "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.";
const decodedString = rot13(encodedString);
console.log(decodedString); // Output: "THE QUICK BROWN FOX JUMPS OVER THE LAYR DOG."
