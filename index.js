class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.substr(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string){
    let words = string.split(" ");
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    for (let i=0; i<words.length; i++){
      if (!exceptions.includes(words[i])) {
				words[i] = this.capitalize(words[i])
			}
		}
    let sentance = words.join(' ')
    return sentance.charAt(0).toUpperCase()+ sentance.substr(1)
  }
}
