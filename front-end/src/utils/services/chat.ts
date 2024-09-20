import axios from "axios"

const API_URL = "http://localhost:8080";

const headers = {
    "content-type": "application/json",
};

export async function getGeminiResponse(userQuery: string) {
    const response = await axios.post(`${API_URL}/api/agents/chat`, { user_text: JSON.stringify(userQuery) }, { headers });

    return response;
}