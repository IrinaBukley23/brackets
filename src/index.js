module.exports = function check(str, bracketsConfig) {
  let res = bracketsConfig.join(',').split(',').join('');
  console.log(res);
  let brackets = [];
  for (let i = 0; i < res.length; i += 2) {
    brackets.push(res.slice(i, i + 2));
  }
  console.log(brackets);
  let result = true;
  let restLength = str.length;
  while (result) {
    restLength = str.length;
    for (let i = 0; i < brackets.length; i++) {
      str = str.replace(brackets[i],'');
    }
    if (restLength === str.length) {
      result = false;
    }
  }
  return (str.length === 0);
}
