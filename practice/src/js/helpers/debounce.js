/**
 * Debounces a function to limit its execution frequency.
 * @param {Function} func - The function to debounce.
 */
function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

export default debounce;
