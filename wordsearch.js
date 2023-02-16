const wordSearch = (letters, word) => {
  // Join the rows of the letters array into an array of strings
  const horizontalJoin = letters.map(ls => ls.join(''));
  const reverseWord = word.split('').reverse().join('');
  console.log(reverseWord);
  // Check if the word appears in any of the rows across.
  // very simple and limited
  for (let row of horizontalJoin) {
    if (row.includes(word) || row.includes(reverseWord)) {
      return true;
    }
  }
  
  // Check if the word appears in any of the columns
  for (let i = 0; i < letters.length; i++) {
    let column = '';
    for (let j = 0; j < letters[0].length; j++) {
      column += letters[j][i];
    }
    if (column.includes(word) || column.includes(reverseWord)) {
      return true;
    }
  }
  
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[0].length; j++) {
      // Check if the word appears in the diagonal that starts at this character
      let diagonal = '';
      for (let k = 0; k < word.length; k++) {
        if (i + k < letters.length && j + k < letters[0].length) {
          diagonal += letters[i + k][j + k];
        }
      }
      if (diagonal.includes(word) || diagonal.includes(reverseWord)) {
        return true;
      }
    }
  }

  // Search for diagonals that slope downwards from left to right
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[0].length; j++) {
      // Check if the word appears in the diagonal that starts at this character
      let diagonal = '';
      for (let k = 0; k < word.length; k++) {
        if (i - k >= 0 && j + k < letters[0].length) {
          diagonal += letters[i - k][j + k];
        }
      }
      if (diagonal.includes(word) || diagonal.includes(reverseWord))
        return true;
    }
  }
  return false;
};
  
// If the word doesn't appear in any rows or columns, return false

module.exports = wordSearch;