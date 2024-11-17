const Square = require('../square');

describe('Square', () => {
    test('should render as this SVG', () => {

        const square = new Square();
        square.setColor('blue');

        expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="110" y="60" width="80" height="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white"></text></svg>`
        );
    });
});