const accessTokenName = "token";
const TokenService = {
  setToken(value) {
    localStorage.setItem(accessTokenName, value);
  },
  getToken() {
    return localStorage.getItem(accessTokenName);
  },
  deleteToken() {
    return localStorage.removeItem(accessTokenName);
  },
};

export default TokenService;
