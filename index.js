class Formatter {

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.substr(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  // static upperCaseChar(match, offset, string) {
  //   return match.toUpperCase();
  // }

  static titleize(string) {
    // return string.replace(/(?<!^)\b(?:the|a|an|but|of|and|for|at|by|from)\b(*SKIP)(*FAIL)|\b(\pL)/g, this.upperCaseChar);
    let exceptions =["the","a","an","but","of","and","for","at","by","from"];
    return string.split(" ").map((word, index) => (exceptions.includes(word) && (index!=0))? word : this.capitalize(word)).join(" ");
  }
}
