import { BASE_URL } from "../shared/constants";
export default class Api {
  static async login(username, password) {
    try {
      const request = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const response = await request.json();
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async signup(email, username, password) {
    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);
      data.append("username", username);
      const request = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        body: JSON.stringify({
          email,
          username,
          password,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const response = await request.json();
      return response;
    } catch (error) {
      throw error;
    }
  }
}
