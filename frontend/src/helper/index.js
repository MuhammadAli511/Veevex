const API_URL = "http://localhost:3000/api";
export const registerUser = ({ firstName, lastName, email, password }) => {

  fetch(`${API_URL}/customerRoute/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ firstName, lastName, email, password }),
  }).then((res) => res.json());
}