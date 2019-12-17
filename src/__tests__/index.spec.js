import TaggedConsole from '../index';

describe('TaggedConsole', () => {
  describe('Init', () => {
    it('should instantiate', () => {
      const instance = new TaggedConsole('TEST');
      expect(typeof instance).toBe('object');
      expect(instance.name).toBe('TEST');
      expect(instance.logger).toBe(console);
    });
  });

  describe('Functional', () => {
    let instance;
    const loggerSpy = {
      log: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
    };

    it('should instantiate', () => {
      instance = new TaggedConsole('TEST', {logger: loggerSpy});
      expect(typeof instance).toBe('object');
      expect(instance.name).toBe('TEST');
    });

    ['log', 'warn', 'error'].forEach((method) => {
      it(`should send ${method}`, () => {
        instance[method]('test message');
        expect(loggerSpy[method]).toHaveBeenCalledWith('[TEST]: test message');
      })
    });
  });
});
