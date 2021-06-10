//1

function verificaPalindrome(word) {
  let reverseWord = word.split('').reverse().join('');
  if (word === reverseWord) {
    console.log('true');
  } else {
    console.log('false');
  }
}
verificaPalindrome('radar');