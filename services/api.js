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
      const request = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        body: JSON.stringify({
          email,
          username,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await request.json();
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async signout(accessToken, refreshToken) {
    try {
      const request = await fetch(`${BASE_URL}/auth/logout`, {
        method: "DELETE",
        body: JSON.stringify({
          accessToken,
          refreshToken,
        }),
        headers: {
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
