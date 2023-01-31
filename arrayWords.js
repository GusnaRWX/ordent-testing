// input value
const arr = [
    ['J', 'L', 'L', 'M'],
    ['u', 'i', 'i', 'a'],
    ['s', 'v', 'f', 'n'],
    ['t', 'e', 'e', '']
]

// input value
const arr2 = [
    ['T', 'M', 'i', 't', 'p', 'o', 't', 'c'],
    ['h', 'i', 's', 'h', 'o', 'f', 'h', 'e'],
    ['e', 't', '', 'e', 'w', '', 'e', 'l'],
    ['', 'o', '', '', 'e', '', '', 'l'],
    ['', 'c', '', '', 'r', '', '', ''],
    ['', 'h', '', '', 'h', '', '', ''],
    ['', 'o', '', '', 'o', '', '', ''],
    ['', 'n', '', '', 'u', '', '', ''],
    ['', 'd', '', '', 's', '', '', ''],
    ['', 'r', '', '', 'e', '', '', ''],
    ['', 'i', '', '', '', '', '', ''],
    ['', 'a', '', '', '', '', '', '']]


// function for adding array when result is a string
function arrAdder (arr) {
    let val = ''
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j][i] !== '') {
                val += arr[j][i]
            }
        }
        val += ' '
    }
    return val.trim()
}

console.log(arrAdder(arr))
// if want to test with arr2 value un-commnent this
// console.log(arrAdder(arr2))

// run 'node arrayWords.js' in terminal