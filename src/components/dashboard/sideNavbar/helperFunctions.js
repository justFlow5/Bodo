export const sortAlpha = (arr) => {
  return arr.sort((a, b) =>
    a[0].localeCompare(b[0], undefined, {
      sensitivity: 'base',
    })
  );
};

export const sortASC = (arr) => {
  return arr.sort((a, b) => a[1] - b[1]);
};

export const sortDESC = (arr) => {
  return arr.sort((a, b) => b[1] - a[1]);
};
