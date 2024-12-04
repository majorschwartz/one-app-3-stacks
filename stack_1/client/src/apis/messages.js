import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api";

export const getMessages = async () => {
	const response = await axios.get(`${API_URL}/messages`);
	return response.data;
};

export const createMessage = async (message) => {
	const response = await axios.post(`${API_URL}/messages`, message);
	return response.data;
};
