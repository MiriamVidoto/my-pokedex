export const setDataToLocalStorage = (key, data) => {
  const dataStr = JSON.stringify(data);
  localStorage.setItem(key, dataStr);
};

export const getDataFromLocalStorage = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return undefined;
};
