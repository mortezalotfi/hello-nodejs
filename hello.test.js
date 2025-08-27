const sayHello = require('./hello');

describe('sayHello', () => {
  it('should return "Hello, world!"', () => {
    expect(sayHello()).toBe("Hello, world!");
  });
});

