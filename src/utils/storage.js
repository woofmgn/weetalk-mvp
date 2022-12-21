const token = "token";

export function setStorageUser(userId) {
  localStorage.setItem(token, JSON.stringify(userId));
}

export function getStorageUser() {
  const userToken = JSON.parse(localStorage.getItem(token));
  if (userToken) {
    return userToken;
  }
  return null;
}
