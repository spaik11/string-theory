function crazyCase(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if(i % 2 === 1) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

function exclaim(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if(str[i] === '?') {
      newStr += '!';
    } else if(str[i] === '.') {
      newStr += '!';
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

function ciEmailify(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
      newStr += `${str[i].toLowerCase().replace(' ', '.')}`;
    }
    return newStr + '@codeimmersives.com';
  }

function reverse(str) {
  let newStr = '';
  let strLength = str.length - 1;

  for (let i = strLength; i > -1; i--) {
    newStr += str[i]
  }
  return newStr;
}

function crazyCase2ReturnOfCrazyCase(str) {
  str = str.toLowerCase();
  let newStr = '';
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if(counter % 2 === 0) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }

    if(str[i] !==  ' ') {
      counter++;
    }
  }
  return newStr;
}


function titleCase(str) {
  let newStr = '';
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if(i === 0) {
      newStr += str[i].toUpperCase();
  } else if (str[i - 1] === ' ') {
    newStr += str[i].toUpperCase();
  } else {
  newStr += str[i]
  }
}
return newStr;
}

function onlyVowels(str) {
  let newStr = '';
  
  for (let i = 0; i < str.length; i++) {
    if ('aeiouAEIOU'.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

function crazyCase3SonOfCrazyCase(str) {
  str = str.toLowerCase();
  let newStr = '';
  let counter = 0;

  for(let i = 0; i < str.length; i++) {
    if(counter % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }

    if('abcdefghijklmnopqrstuvwxyz'.includes(str[i])) {
      counter++;
    }
  }
  return newStr;
}


module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}