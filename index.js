class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9 '-]/g, '')
  }

  static titleize(string){
    let words = string.split(" ");
    let sentance = [];
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    for (let i=0; i<words.length; i++){
    if (i ==0){
      sentance.push(this.capitalize(words[i]))
    }
    else {
      if (exceptions.includes(words[i])){
        sentance.push(words[i])
      }
      else {
        sentance.push(this.capitalize(words[i]))
      }
      }
    }
    return sentance.join(" ")
  }


}
