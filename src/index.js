class TaggedConsole {
  constructor(name, { logger = console } = {}) {
    this.name = name;
    this.logger = logger;
  }

  dispatchLog(method, msg, ...rest) {
    const taggedMessage = `[${this.name}]: ${msg}`;

    this.logger[method](taggedMessage, ...rest);
  }

  log(...args) {
    this.dispatchLog('log', ...args);
  }

  warn(...args) {
    this.dispatchLog('warn', ...args);
  }

  error(...args) {
    this.dispatchLog('error', ...args);
  }
}

export default TaggedConsole;
