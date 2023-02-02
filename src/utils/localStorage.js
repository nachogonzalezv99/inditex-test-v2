export const setLocalStorage = (key, value, ttl) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl * 1000,
    /*  expiry: now.getTime() + ttl * 60 * 60 * 1000, */
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorage = (key) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
};
