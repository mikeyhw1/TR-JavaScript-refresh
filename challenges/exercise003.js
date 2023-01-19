export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  return words.map((item, index) => {
    if (index > 0) {
      return item.charAt(0).toUpperCase() + item.slice(1);
    } else {
      return item
    }
  }).join("")
}

export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  if (nums.length > 0) {
    return nums.map(item => item * item)
  } else {
    return []
  }
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  const subjectCountArray = people.map(item => item.subjects.length)
  return subjectCountArray.reduce((a, b) => {
    return a + b;
  })
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let result = false
  menu.forEach(item => {
    if (item.ingredients.includes(ingredient)) { result = true }
  });
  return result
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  const newArray = arr1.filter(item => arr2.includes(item));
  const noDuplicates = [...new Set(newArray)]
  return noDuplicates.sort((a, b) => { return a - b });
}
