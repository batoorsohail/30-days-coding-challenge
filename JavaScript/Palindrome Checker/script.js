const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPalindrome = (str) => {
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return str === str.split('').reverse().join('');
}

checkButton.addEventListener("click", () => {
  const inputValue = textInput.value.trim();

  if (inputValue === "") {
    alert("Please input a value")
  } else {
    if (isPalindrome(inputValue)) {
      result.textContent = `${inputValue} is a Palindrome`;
    } else {
      result.textContent = `${inputValue} is not a Palindrome`;
    }
  }
});