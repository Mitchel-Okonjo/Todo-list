const DateFns = (() => {
  const notValid = (date) => {
    if (new Date(date) <= new Date()) return true;
    return false;
  };

  return { notValid };
})();

export { DateFns };
