import Home from "./_component/Home";
const API = process.env.API;

async function fetchtoplinks() {
  const res = await fetch(`${process.env.API}/api/toplinks`, { cache: 'force-cache' });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function fetchAdvert() {
  try {
    const advert = await fetch(
      `${process.env.API}/api/advert?Status=active`, { cache: 'force-cache' }
    );
    return advert.json();
  } catch (error) {
    console.error("Error fetching advert:", error);
    throw error;
  }
}

async function fetchTagline() {
  try {
    const tagline = await fetch(
      `${process.env.API}/api/tagline?_id=6602a87711e47f88c9059347`, { cache: 'force-cache' }
    );
    return tagline.json();
  } catch (error) {
    console.error("Error fetching tagline:", error);
    throw error;
  }
}

async function fetchTopKhabare() {
  try {
    const topKhabare = await fetch(
      `${process.env.API}/api/blogs?Category=TopKhabare&Status=active`, { cache: 'force-cache' }
    );
    return topKhabare.json();
  } catch (error) {
    console.error("Error fetching top khabare:", error);
    throw error;
  }
}

async function fetchIdharbhi() {
  try {
    const idharbhi = await fetch(
      `${process.env.API}/api/blogs?Category=idharbhi&Status=active`, { cache: 'force-cache' }
    );
    return idharbhi.json();
  } catch (error) {
    console.error("Error fetching idharbhi:", error);
    throw error;
  }
}

async function fetchAllBlogs() {
  try {
    const allblogs = await fetch(
      `${process.env.API}/api/allblogs?name=block`, { cache: 'force-cache' }
    );
    return allblogs.json();
  } catch (error) {
    console.error("Error fetching all blogs:", error);
    throw error;
  }
}

async function fetchRajiyablogs() {
  try {
    const Rajiyablogs = await fetch(
      `${process.env.API}/api/allblogs?name=rajiya`, { cache: 'force-cache' }
    );
    return Rajiyablogs.json();
  } catch (error) {
    console.error("Error fetching Rajiyablogs:", error);
    throw error;
  }
}
async function fetchtodaynews() {
  try {
    const todaynews = await fetch(
      `${API}/api/blogs?Status=active&Category=primenews`, { cache: 'force-cache' }
    );
    return todaynews.json();
  } catch (error) {
    console.error("Error fetching Rajiyablogs:", error);
    throw error;
  }
}
async function fetchbadikhabar() {
  try {
    const badikhabar = await fetch(
      `${API}/api/blogs?page=1&limit=12&Status=active&Category=mainnews`, { cache: 'force-cache' }
    );
    return badikhabar.json();
  } catch (error) {
    console.error("Error fetching Rajiyablogs:", error);
    throw error;
  }
}

export default async function Main() {
  const toplinks = await fetchtoplinks();
  const advert = await fetchAdvert();
  const tagline = await fetchTagline();
  const topKhabare = await fetchTopKhabare();
  const idharbhi = await fetchIdharbhi();
  const allblogs = await fetchAllBlogs();
  const Rajiyablogs = await fetchRajiyablogs();
  const todaynews = await fetchtodaynews();
 const badikhabar = await fetchbadikhabar();

  
  return (
    <>
      <Home
        API={API}
        toplinks={toplinks}
        advert={advert}
        badikhabar={badikhabar.data}
        todaynews={todaynews.data}
      />
    </>
  );
}
