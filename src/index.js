module.exports = function check(str, bracketsConfig) {

  const brackets = brackets.map(el => el.join(''));

  for (let i = 0; i < brackets.length; i++){
    if (str.includes(brackets[i])) {
      str = str.replace(brackets[i], '');
      i--;
    }
  };

   return  str?false:true
}


