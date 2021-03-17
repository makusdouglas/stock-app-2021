export const setToLS = (key: string, value: string | JSON) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLS = (key: string) => {
  const value = window.localStorage.getItem(key);

  if (value !== null && value !== "") {
    return JSON.parse(value);
  }
  return null;
};
