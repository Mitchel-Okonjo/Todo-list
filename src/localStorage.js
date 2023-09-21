const Store = (() => {
  // Stores given array in local Storage
  const setArray = (array, name) => {
    // if (!checkStorage("localStorage")) return;
    localStorage.setItem(name, JSON.stringify(array));
  };

  // Get given array from Local Storage
  const getArray = (name) => JSON.parse(localStorage.getItem(name));

  // Check if a given array exists in the local Storage
  const checkArray = (arr) => {
    if (getArray(arr)) {
      return true;
    }
    return false;
  };

  // Get length of a given array
  const getLength = (arr) => {
    const array = getArray(arr);
    return array.length;
  };

  const setId = (name, value) => {
    localStorage.setItem(name, value);
  };

  const getId = (name) => {
    // if given Id variable exists, return the value.
    // Else, set the variable to zero and return the value.
    if (localStorage.getItem(name)) return localStorage.getItem(name);
    localStorage.setItem(name, 0);
    return localStorage.getItem(name);
  };

  // Use Binary search to get specific item from array using a value, target
  const search = (array, target) => {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (target > array[mid].dataId) {
        start = mid + 1;
      } else if (target < array[mid].dataId) {
        end = mid - 1;
      } else {
        return mid;
      }
    }
    return -1;
  };

  // Removes an item from respective array using id of the item
  const removeItem = (name, id) => {
    if (checkArray(name) === false) return;
    const array = getArray(name);
    const index = search(array, id);
    if (index === -1) return;
    array.splice(index, 1);
    setArray(array, name);
  };

  return {
    setArray,
    getArray,
    checkArray,
    getLength,
    removeItem,
    setId,
    getId,
  };
})();

export { Store };
