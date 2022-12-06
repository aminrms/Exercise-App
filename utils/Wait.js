export const Wait = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({});
    }, duration);
  });
};
