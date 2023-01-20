export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  const targetIndex = nums.indexOf(n) + 1
  if (nums.indexOf(n) === -1) {
    return null
  } else if (nums.length >= targetIndex + 1) {
    return nums[targetIndex]
  } else {
    return null
  }
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  const strSplit = str.split('')
  return {
    1: strSplit.filter(item => item === '1').length,
    0: strSplit.filter(item => item === '0').length
  }
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");

  return parseFloat(n.toString().split('').reverse().join(''))
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  return arrs.map(item => item.reduce((a, b) => a + b, 0))
    .reduce((a, b) => a + b, 0)
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  const lastArr = arr.length - 1;
  const temp = arr[0];
  arr[0] = arr[lastArr];
  arr[lastArr] = temp;
  return arr
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  let result = false
  for (const key in haystack) {
    const value = haystack[key]
    if (value && typeof value === 'string') {
      if (value.toLowerCase().includes(searchTerm.toLowerCase())) {
        result = true
      }
    }
  }
  return result
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  const tempStr = str.replace(/[^a-zA-Z0-9 ]/g, '');
  let result = {};
  tempStr.split(' ').forEach(_item => {
    const item = _item.toLowerCase();
    (result[item] === undefined) ? result[item] = 1 : result[item] += 1;
  });
  return result;
};
