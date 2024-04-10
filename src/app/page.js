

export default async function Main() {
  const API = process.env.API;
  let toplinks = [];
  let todaynews = [];
  let badikhabar = [];

  try {
    toplinks = await fetch(`${API}/api/toplinks`).then((res) => res.json());
    todaynews = await fetch(`${API}/api/blogs?Status=active&Category=primenews`).then((res) => res.json());
    badikhabar = await fetch(`${API}/api/blogs?Status=active&Category=mainnews`).then((res) => res.json());
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <>
      <h1>API for toplinks: {API}</h1>
      <ul>
        {toplinks.map((item) => (
          <li key={item._id}>{item._id}</li>
        ))}
      </ul>

      <h1>API for today's news: {API}</h1>
      <ul>
        {todaynews.data.map((item) => (
          <li key={item._id}>{item._id}</li>
        ))}
      </ul>
    </>
  );
}
