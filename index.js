class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9'-\s]+/g, '')
  }

  static titleize(str){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let wordArray = [];
    str.split(' ').map(word => {
      if (word === str.split(' ')[0]){
        wordArray.push(Formatter.capitalize(word))
      } else if (!exceptions.includes(word)){
        wordArray.push(Formatter.capitalize(word))
      } else {
        wordArray.push(word)
      }
    })
    return wordArray.join(' ');
  }

}
