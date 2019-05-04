class Formatter {
  static capitalize(string){
    let firstLetter = string.charAt(0).toUpperCase();
    let remaining = string.slice(1);
    return `${firstLetter}${remaining}`;
  }

  static sanitize(string){
    //removes all non-alphanumeric characters except for dashes, single quotes and spaces
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string){
    // takes in a string and capitalizes all words in a sentence
    // except the, a, an, but, of, and, for, at, by, and from;
    // and always capitalizes the first word.
    let stringArray = string.split(' ');
    let excludedWords = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ];
    let result = [];
    for(let i=0; i<stringArray.length; i++){
        if(i === 0){
           result.push(this.capitalize(stringArray[i]));
        }else {
          if (excludedWords.includes(stringArray[i])){
           result.push(stringArray[i]);
          }else{
           result.push(this.capitalize(stringArray[i]));
          }
        }
      }
      return result.join(" ");
  }

  //add static methods here
}
