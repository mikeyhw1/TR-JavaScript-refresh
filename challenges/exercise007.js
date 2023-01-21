/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 * @returns {Number}
 */
export const sumDigits = (n) => {
  if (n === undefined) throw new Error("n is required");

  if (Number.isInteger(n)) {
    let sum = 0
    const digitsArray = n.toString().split("")
    digitsArray.map(item => sum += parseInt(item))
    return sum
  } else {
    return false
  }
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range.
 * For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 * @returns {Array}
 */
export const createRange = (start, end, step = 1) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  // if (step === undefined)
  //   console.log(
  //     "FYI: Optional step parameter not provided. Remove this check once you've handled the optional step!"
  //   );

  let arr = []

  for (let i = start; i <= end; i += step) {
    arr.push(i)
  }
  return arr
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 * @param {String} date
 * @returns {Array}
 */
export const getScreentimeAlertList = (users, input_date) => {
  if (users === undefined) throw new Error("users is required");
  if (input_date === undefined) throw new Error("date is required");

  if (users && users.length > 0) {
    let userList = []
    users.map(item => {
      const { username, screenTime } = item
      screenTime.map(item2 => {
        const { date, usage } = item2
        if (date === input_date) {
          let totalTime = 0
          for (let key in usage) {
            totalTime += usage[key]
          }
          if (totalTime > 100) {
            userList.push(username)
          }
        }
      })
    })
    return userList
  } else { return false }
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133.
 * A hexadecimal code is a number written in hexadecimal notation, i.e. base 16.
 * If you want to know more about hexadecimal notation: https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, 
 * the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} hexStr
 * @returns {String}
 */
export const hexToRGB = (hexStr) => {
  if (hexStr === undefined) throw new Error("hexStr is required");

  const redDecStr = parseInt(hexStr.slice(1, 3), 16)
  const greenDecStr = parseInt(hexStr.slice(3, 5), 16)
  const blueDecStr = parseInt(hexStr.slice(5, 7), 16)
  return `rgb(${redDecStr},${greenDecStr},${blueDecStr})`
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 * @returns {String}
 */
export const findWinner = (board) => {
  if (board === undefined) throw new Error("board is required");

  const winningResults = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  let currentPosition_X = []
  let currentPosition_0 = []
  let winner = null
  const currentPosition = board.flat()
  currentPosition.map((item, index) => {
    if (item === "X") { currentPosition_X.push(index) }
    if (item === "0") { currentPosition_0.push(index) }
  })

  const checkWinningResult = () => {
    winningResults.some(winningItem => {
      return checkResult(winningItem, currentPosition_X, "X") ||
        checkResult(winningItem, currentPosition_0, "0")
    })
  }
  const checkResult = (winningItem, arr, player) => {
    if (winningItem.every((item) => arr.includes(item))) {
      winner = player
      return true
    } else { return false }
  }

  checkWinningResult()
  return winner
};