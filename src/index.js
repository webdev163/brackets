module.exports = function check(str, bracketsConfig) {
  let bracketsPairs = [];
  bracketsConfig.forEach(el => !isNaN(el[0] || el[1]) ? bracketsPairs.push(el[0] + el[1]) : bracketsPairs.push('\\' + el[0] + '\\' + el[1]));
  let result = str
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < bracketsPairs.length; j++) {
      result = result.replace(new RegExp(bracketsPairs[j], 'g'), '');
    }
  }
  return result.length === 0 ? true : false
}
