import { Inter } from "next/font/google";
import "./global.css";  
import  './style.scss'
import "./bootstrap.min.css";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import { AppProvider } from "./_context/AppContext";

export const metadata = {
  title: "Third Eye World News",
  description: "Third Eye World News",  
};

export default async function RootLayout({ children }) {
  const API = process.env.API;
  const data = await fetch(
    `${process.env.API}/api/blogs?Status=active?page=1&limit=40&`
  ).then((res) => res.json());
  // await fetch{api}.then((res) => res.json());

  const advert = await fetch(
    `${process.env.API}/api/advert?Status=active`
  ).then((res) => res.json());
  const tagline = await fetch(
    `${process.env.API}/api/tagline?_id=6602a87711e47f88c9059347`
  ).then((res) => res.json());
  const blogdisplay = await fetch(`${process.env.API}/api/blogdisplay`).then(
    (res) => res.json()
  );
  const rajiya = await fetch(`${process.env.API}/api/rajiya`).then((res) =>
    res.json()
  );
  const topKhabare = await fetch(
    `${process.env.API}/api/blogs?Category=TopKhabare&Status=active`
  ).then((res) => res.json());
  const idharbhi = await fetch(
    `${process.env.API}/api/blogs?Category=idharbhi&Status=active`
  ).then((res) => res.json());
  const toplinks = await fetch(`${process.env.API}/api/toplinks`).then((res) =>
    res.json()
  );
  const allblogs = await fetch(`${process.env.API}/api/allblogs?name=block`).then((res) =>
    res.json()
  );

  return (
    <html lang="en">
      <body >
        <AppProvider API={API}>
          <Header
            API={API}
            data={data}
            advert={advert}
            tagline={tagline}
            blogdisplay={blogdisplay}
            rajiya={rajiya}
            topKhabare={topKhabare.data}
          />
          {children}
          <Footer
            API={API}
            advert={advert}
            idharbhi={idharbhi.data}
            toplinks={toplinks}
            allblogs={allblogs.data}
          />
        </AppProvider>
      </body>
    </html>
  );
}
