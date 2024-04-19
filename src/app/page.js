import Home from "./_component/Home";
const API = process.env.API;

async function fetchtoplinks() {
  const res = await fetch(`${process.env.API}/api/toplinks`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function fetchAdvert() {
  try {
    const advert = await fetch(
      `${process.env.API}/api/advert?Status=active`, { cache: 'no-store' }
    );
    return advert.json();
  } catch (error) {
    console.error("Error fetching advert:", error);
    throw error;
  }
}

async function fetchtodaynews() {
  try {
    const todaynews = await fetch(
      `${API}/api/blogs?Status=active&Category=primenews`, { cache: 'no-store' }
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
      `${API}/api/blogs?page=1&limit=12&Status=active&Category=mainnews`, { cache: 'no-store' }
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
