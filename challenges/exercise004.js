export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(item => item < 1)
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  return names.filter(item => item.charAt(0) === char)
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  return words.filter(item => item.split(' ')[0] === 'to')
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter(item => Number.isInteger(item))
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  return users.map(item => item?.data?.city?.displayName)
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.map(item => {
    const squareRoot = Math.sqrt(item)
    return Math.round(squareRoot * 100) / 100
  })
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  return sentences.filter(item => item.toLowerCase().includes(str))
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  return triangles.map(item => Math.max(...item))
}
