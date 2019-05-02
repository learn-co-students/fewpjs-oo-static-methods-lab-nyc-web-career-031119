class Formatter {

	constructor() {
	}

	static capitalize(text) {

		return text.charAt(0).toUpperCase() + text.slice(1)
	}

	static sanitize(input) {
		let temp = '';
		const letters = /^[A-Za-z'\-\s]+$/;
			for (let i = 0; i < input.length; i++) {
				if (input.charAt(i).match(letters)) {
					temp += input.charAt(i);
				}
			}
		return temp
	}

	static titleize(sentence) {
    const articles = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
		const splitSentence = sentence.split(' ');
		for (let i = 0; i < splitSentence.length; i++){
			if (!articles.includes(splitSentence[i])) {
				splitSentence[i] = this.capitalize(splitSentence[i])
			}
		}
		return splitSentence.join(' ');
	}
}
