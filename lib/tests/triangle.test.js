const Triangle = require('../triangle');

describe('Triangle', () => {
    test('should render as this SVG', () => {

        const triangle = new Triangle();
        triangle.setColor('blue');

        expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,40 110,160 190,160" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white"></text></svg>`
        );
    });
});