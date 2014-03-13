word-of-the-day.js
===

Retrieves the word of the day from merriam-webster's website

Install
---

```
npm install -g wotd
```

Usage
---

![word of the day.js](https://lh4.googleusercontent.com/-5YWuYdC7R64/UyD-3PaTgKI/AAAAAAAAAsE/xZBpO5cdtOM/s0/MINGW32cUsersCyrus_2014-03-13_08-42-03.png)

```javascript
var wotd = require('wotd');

wotd(function(err, result) {
  if (err) return console.log(error);

  console.log(result);
});
```
LICENSE
---

MIT. See [LICENSE](LICENSE)
