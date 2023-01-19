// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return firstName.charAt(0) + '.' + lastName.charAt(0);
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  const result = originalPrice + (originalPrice * vatRate / 100);
  return Math.round(result * 100) / 100;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  const result = originalPrice - (originalPrice * reduction / 100);
  return Math.round(result * 100) / 100
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  const i = Math.floor(str.length / 2);
  return (str.length % 2 === 0)
    ? str[i - 1] + str.charAt(i)
    : str.charAt(i);
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  return word.split("").reverse().join("")
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  return words.map(item => item.split("").reverse().join(""));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  let count = 0
  users.map(item => {
    if (item.type === 'Linux') {
      count += 1
    }
  })
  return count
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  const average = scores.reduce((a, b) => a + b, 0) / scores.length;
  return Math.round(average * 100) / 100
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  if (n % 15 == 0) { return 'fizzbuzz' }
  else if (n % 3 == 0) { return 'fizz' }
  else if (n % 5 == 0) { return 'buzz' }
  else return n;
}
