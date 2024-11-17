import API_URL from "./constant";

export const fetchAPI = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("response:", response.body);
    return response.json();
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};
