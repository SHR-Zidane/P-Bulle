//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const trimmessage = message.trim();
  const question = trimmessage.endsWith('?');

  if(trimmessage === ''){
    return 'Fine. Be that way!'
  }
  if(question && trimmessage === trimmessage.toUpperCase()&& /[A-Z]/.test(trimmessage)){
    return "Calm down, I know what I'm doing!"
  }
  if(trimmessage === trimmessage.toUpperCase() && /[A-Z]/.test(trimmessage)){
    return 'Whoa, chill out!'
  }
  if(question){
    return 'Sure.'
  }
  else{
    return 'Whatever.'
  }
};
