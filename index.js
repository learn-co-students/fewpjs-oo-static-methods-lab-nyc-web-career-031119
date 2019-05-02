class Formatter {
  static capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-\s']+/g, '');
  }

  static titleize(str){
    const words = str.split(' ');
    words[0] = this.capitalize(words[0]);
    const lowCase = ['a', 'the', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const capitalized = words.map(word => {
      if(!lowCase.includes(word)){
        return this.capitalize(word);
      } else {
        return word;
      }
    })
    return capitalized.join(' ');
  }
};
