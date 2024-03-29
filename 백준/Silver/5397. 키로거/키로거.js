const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const T = input.shift();
for (let i = 0; i < T; i++) {
  password(input[i].split(''));
}

function password(str) {
  let front = [];
  let back = [];
  str.forEach(kp => {
    if (kp == '-') {
      front.length == 0 || front.pop();
    } else if (kp == '>') {
      back.length == 0 || front.push(back.pop());
    } else if (kp == '<') {
      front.length == 0 || back.push(front.pop());
    } else {
      front.push(kp);
    }
  });
  console.log(front.join('') + back.reverse().join(''));
}
