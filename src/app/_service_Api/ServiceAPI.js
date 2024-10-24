import axios from "axios";

const API = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchTopLinks() {
  try {
    const response = await axios.get(`${API}/api/user/toplinks`);
    return await response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export async function fetchTagline() {
  try {
    const response = await axios.get(
      `${API}/api/user/tagline?_id=6602a87711e47f88c9059347`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching tagline:", error);
    throw error;
  }
}

export async function fetchAdvert() {
  try {
    const response = await axios.get(`${API}/api/user/advert`);
    return await response.data;
  } catch (error) {
    console.error("Error fetching advert:", error);
    throw error;
  }
}

export async function fetchTopKhabare() {
  try {
    const response = await axios.get(
      `${API}/api/user/blogs?Category=title1&Status=true`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching top khabare:", error);
    throw error;
  }
}

export async function fetchTodayNews() {
  try {
    const response = await axios.get(`${API}/api/user/allblogs?Status=true&name=title2`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Rajiyablogs:", error);
    throw error;
  }
}

export async function fetchBadikhabar() {
  try {
    const response = await axios.get(
      `${API}/api/user/allblogs?page=1&limit=12&Status=true&name=title3`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Rajiyablogs:", error);
    throw error;
  }
}

export async function fetchIdharbhi() {
  try {
    const response = await axios.get(
      `${API}/api/user/allblogs?Status=true&name=title4`,
      { cache: "no-store" }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching idharbhi:", error);
    throw error;
  }
}

export async function fetchAllBlogs() {
  try {
    const response = await axios.get(`${API}/api/user/headerblogs?name=block`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all headerblogs:", error);
    throw error;
  }
}

export async function fetchRajiyablogs() {
  try {
    const response = await axios.get(`${API}/api/user/headerblogs?name=state`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Rajiyablogs:", error);
    throw error;
  }
}

export const fetchallblogsbyblock = async (page) => {
  try {
    const response = await axios.get(
      `${API}/api/user/allblogs?Status=true&name=block&page=${page}`
    );
    return await response.data;
  } catch (error) {
    console.error("Error fetching Rajiyablogs:", error);
    throw error;
  }
};

export const fetchtajasamachar = async (page) => {
  try {
    const response = await axios.get(
      `${API}/api/user/tajasamachar?Status=true`
    );

    return await response.data;
  } catch (error) {
    console.error("Error fetching tajasamachar:", error);
    throw error;
  }
};

export const fetchbreakingblogs = async (page) => {
  try {
    const response = await axios.get(
      `${API}/api/user/blogs?Status=active&Headline=true`
    );
    return await response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const fetchfounderdetails = async () => {
  try {
    const response = await axios.get(`${API}/api/user/founder`);
    return await response.data;
  } catch (error) {
    console.error("Error fetching founder:", error);
    throw error;
  }
};

export const fetchhits = async () => {
  try {
    const response = await axios.get(`${API}/api/user/hits`);
    return await response.data;
  } catch (error) {
    console.error("Error fetching hits:", error);
    throw error;
  }
};

export async function fetchRajiyablogsBypage(page) {
  try {
    const response = await axios.get(
      `${API}/api/user/allblogs?Status=true&name=state&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching allblogs:", error);
    throw error;
  }
}

export async function fetchSearch(value) {
  try {
    const response = await axios.get(`${API}/api/user/blogsearch/${value}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogsearch:", error);
    throw error;
  }
}

export async function fetchSubscribers(userdata) {
  try {
    const response = await axios.post(`${API}/api/user/Subscribers`, userdata, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Subscribers:", error);
    throw error;
  }
}

export async function fetchyoutube(userdata) {
  try {
    const response = await axios.get(`${API}/api/user/youtube`);
    return response.data;
  } catch (error) {
    console.error("Error fetching youtube:", error);
    throw error;
  }
}


export async function fetchoption() {
  try {
    const response = await axios.get(`${API}/api/user/poll`);
    return response.data;
  } catch (error) {
    console.error("Error fetching poll:", error);
    throw error;
  }
}
export async function fetchaddress() {
  try {
    const response = await axios.get(`${API}/api/user/address`);
    return response.data;
  } catch (error) {
    console.error("Error fetching address:", error);
    throw error;
  }
}

export async function fetchteam() {
  try {
    const response = await axios.get(`${API}/api/user/team?Status=true`);
    return response.data;
  } catch (error) {
    console.error("Error fetching team:", error);
    throw error;
  }
}

export async function fetchNews(orderno) {
  try {
    const response = await axios.get(`${API}/api/user/blogs?order=${orderno}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}

export async function fetchCategory(Category) {
  try {
    const response = await axios.get(`${API}/api/user/categories?category=${Category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error;
  }
}

export async function fetchblogs(currentPage,limit,Category) {
  try {
    const response = await axios.get(`${API}/api/user/blogs?Status=true&page=${currentPage}&limit=${limit}&Category=${Category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}