class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(str) {
    let exempt =["the","a","an","but","of","and","for","at","by","from"];
 return str.split(" ").map((word, index) => (exempt.includes(word) && (index!=0))? word : this.capitalize(word)).join(" ");
  }
}
