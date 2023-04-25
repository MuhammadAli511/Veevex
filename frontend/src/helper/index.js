const API_URL = "http://localhost:3000/api";
export const registerUser = async ({ firstName, lastName, email, password }) => {

  const response = await fetch(`${API_URL}/customerRoute/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ firstName, lastName, email, password }),
  });
  return response.json();
}

export const loginUser = async ({ email, password }) => {

  const response = await fetch(`${API_URL}/customerRoute/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}