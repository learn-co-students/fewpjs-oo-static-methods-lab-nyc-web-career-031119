class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-\s']+/g, '');
  }

  static titleize(string) {
    const words = string.split(' ')
    const lowCase = ['a', 'the', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let firstWord = words.shift();
    firstWord = this.capitalize(firstWord)
    const capitalizedWords = words.map(function(word) {
      if (!lowCase.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      } else {
        return word
      }
    });
    return firstWord + " " + capitalizedWords.join(" ");
  }
}
