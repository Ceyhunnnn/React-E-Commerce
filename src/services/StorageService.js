const StorageService = {
  setStorage(name, value) {
    localStorage.setItem(name, value);
  },
  getStorage(name) {
    return localStorage.getItem(name);
  },
  deleteStorage(name) {
    return localStorage.removeItem(name);
  },
};

export default StorageService;
