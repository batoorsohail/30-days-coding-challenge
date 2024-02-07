const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPalindrome = (str) => {
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return str === str.split('').reverse().join('');
}