class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, "")
  }

  static titleize(title) {
    let newTitle = []
    let titleIntoArray = title.split(" ")
    newTitle.push(Formatter.capitalize(titleIntoArray[0]))
    titleIntoArray.slice(1).forEach( function(word) {
      if ( word !== "a" && word !== "an" && word !== "but" && word !== "of" && word !== "and" && word !== "for" && word !== "at" && word !== "by" && word !== "from" && word !== "the") {
        newTitle.push(Formatter.capitalize(word));
      }
      else {
        newTitle.push(word);
      }
    })
    return newTitle.join(" ")
  }
}
