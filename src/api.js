import axios from "axios";

const url = 'http://localhost:3000';

export async function getAllBooks() {
    let response = await axios.get(`${url}/books`);
    if (response.status === 200) {
        return response.data;
    }
    else {
        return
    }
}

export async function getSingleBook(id) {
    let response = await axios.get(`${url}/books/${id}`);
    if (response.status === 200) {
        return response.data;
    }
    else {
        return
    }
}