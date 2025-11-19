var TimeLimitedCache = function () {
  this.key_val = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  if (this.key_val.has(key) == true)
    clearTimeout(this.key_val.get(key).timerID);
  let timerID = setTimeout(() => {
    if (this.key_val.has(key) == true) {
      this.key_val.delete(key);
      return (false)
    }
  }, duration);
  if (this.key_val.has(key) == false) {
    this.key_val.set(key, { value, timerID });
    return (false);
  }
  this.key_val.set(key, { value, timerID });
  return (true);
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */

TimeLimitedCache.prototype.get = function (key) {
  if (this.key_val.has(key) == true)
    return (this.key_val.get(key).value);
  else
    return (-1);
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return (this.key_val.size);
};


/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */