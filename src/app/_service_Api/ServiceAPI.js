import axios from 'axios';

const API = process.env.API;

export async function fetchTopLinks() {
  try {
    const response = await axios.get(`${API}/api/toplinks`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export async function fetchTagline() {
  try {
    const response = await axios.get(`${API}/api/tagline?_id=6602a87711e47f88c9059347`, { cache: "no-store" });
    return response.data;
  } catch (error) {
    console.error("Error fetching tagline:", error);
    throw error;
  }
}

export async function fetchAdvert() {
  try {
    const response = await axios.get(`${API}/api/advert?Status=true`, { cache: "no-store" });
    return response.data;
  } catch (error) {
    console.error("Error fetching advert:", error);
    throw error;
  }
}

export async function fetchTopKhabare() {
  try {
    const response = await axios.get(`${API}/api/blogs?Category=title1&Status=true`, { cache: "no-store" });
    return response.data;
  } catch (error) {
    console.error("Error fetching top khabare:", error);
    throw error;
  }
}

export async function fetchTodayNews() {
  try {
    const response = await axios.get(`${API}/api/allblogs?Status=true&name=title2`, { cache: "no-store" });
    return response.data;
  } catch (error) {
    console.error("Error fetching Rajiyablogs:", error);
    throw error;
  }
}

export async function fetchBadikhabar() {
  try {
    const response = await axios.get(`${API}/api/allblogs?page=1&limit=12&Status=true&name=title3`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Rajiyablogs:", error);
    throw error;
  }
}

export async function fetchIdharbhi() {
  try {
    const response = await axios.get(`${API}/api/allblogs?Status=true&name=title4`, { cache: "no-store" });
    return response.data;
  } catch (error) {
    console.error("Error fetching idharbhi:", error);
    throw error;
  }
}

export async function fetchAllBlogs() {
  try {
    const response = await axios.get(`${API}/api/headerblogs?name=block`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    throw error;
  }
}

export async function fetchRajiyablogs() {
  try {
    const response = await axios.get(`${API}/api/headerblogs?name=state`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Rajiyablogs:", error);
    throw error;
  }
}