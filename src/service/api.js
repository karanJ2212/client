import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (data) => {
  console.log(data);
  try {
    // return await axios.post(`${URL}/add`, data);

    return await fetch(`${URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log("error while calling api", error);
  }
};
