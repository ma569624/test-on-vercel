import "./global.css";
import "./style.scss";
import "./bootstrap.min.css";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import { AppProvider } from "./_context/AppContext";

export const metadata = {
  title: "Third Eye World News",
  description: "Third Eye World News",
};


const API = process.env.API;

async function fetchtoplinks() {
  const res = await fetch(`${process.env.API}/api/toplinks`, { cache: 'no-store' } );
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

async function fetchTagline() {
  try {
    const tagline = await fetch(
      `${process.env.API}/api/tagline?_id=6602a87711e47f88c9059347`, { cache: 'no-store' }
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
      `${process.env.API}/api/blogs?Category=TopKhabare&Status=active`, { cache: 'no-store' }
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
      `${process.env.API}/api/blogs?Category=idharbhi&Status=active`, { cache: 'no-store' }
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
      `${process.env.API}/api/allblogs?name=block`, { cache: 'no-store' }
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
      `${process.env.API}/api/allblogs?name=rajiya`, { cache: 'no-store' }
    );
    return Rajiyablogs.json();
  } catch (error) {
    console.error("Error fetching Rajiyablogs:", error);
    throw error;
  }
}

export default async function RootLayout({ children }) {
  const toplinks = await fetchtoplinks();
  const advert = await fetchAdvert();
  const tagline = await fetchTagline();
  const topKhabare = await fetchTopKhabare();
  const idharbhi = await fetchIdharbhi();
  const allblogs = await fetchAllBlogs();
  const Rajiyablogs = await fetchRajiyablogs();

  return (
    <html lang="en">
      <body>
        <AppProvider API={API}>
          <Header
            API={API}
            advert={advert}
            tagline={tagline}
            allblogs={allblogs.data}
            Rajiyablogs={Rajiyablogs.data}
            topKhabare={topKhabare.data}
          />

          {children}
          <Footer
            API={API}
            advert={advert}
            idharbhi={idharbhi.data}
            toplinks={toplinks}
            allblogs={allblogs.data}
            Rajiyablogs={Rajiyablogs.data}
          />
        </AppProvider>
      </body>
    </html>
  );
}