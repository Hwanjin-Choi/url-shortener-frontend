// api.js
import axios from "axios";

const API_URL = "http://localhost:8085/api";

export const createShortUrl = async (originalUrl) => {
  try {
    const response = await axios.post(`${API_URL}/create-short-url`, {
      originalUrl,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating short URL:", error);
    throw error;
  }
};

export const getOriginalUrlByShortUrl = async (shortUrl) => {
  console.log(shortUrl);
  try {
    const response = await axios.get(`${API_URL}/get-orig-url-by-short-url`, {
      params: { shortUrl },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching original URL:", error);
    throw error;
  }
};
