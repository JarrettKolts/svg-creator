class Circle {
    constructor(color = '', letters = '') {
        this.color = color;
        this.letters = letters;
    }

    setColor(color) {
        this.color = color;
    }

    setText(letters) {
        this.letters = letters;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.letters}</text></svg>`;
    }
}

module.exports = Circle;