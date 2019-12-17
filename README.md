# Tagged Console

## Purpose
This package offers only single class that wraps `console` compliant logger and logs all statements with a given tag.

More documentation will follow. For now, please read example use case:

## Example use case
```js
import TaggedConsole from 'tagged-console';

const logger = new TaggedConsole('SomeModule');

logger.log('Some message'); // prints [SomeModule]: Some message
```

## Methods
Currently it offers following methods:
- log
- warn
- error
- dispatchLog(method, msg, ...args) (which evaluates to console[method](taggedMessage, ...rest))

## Status
This module is still under construction. Please do not use it on production. Version 1.0.0 will follow shortly.
