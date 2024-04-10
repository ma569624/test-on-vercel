import Image from "next/image";
import Home from "./_component/home";



export default async function Main() {
  const API = process.env.API
  let toplinks, advert, todaynews, badikhabar;
  toplinks = await fetch(`${API}/api/toplinks`).then((res) => res.json())
  advert = await fetch(`${API}/api/advert?Status=active`).then((res) => res.json())
  todaynews = await fetch(`${API}/api/blogs?Status=active&Category=primenews`).then((res) => res.json())
  badikhabar = await fetch(`${API}/api/blogs?Status=active&Category=mainnews`).then((res) => res.json())

  return (

    <>
      <h1> this is api {API} {
        toplinks.map((item) => <>{item._id}</>)
      }</h1>
      <Home API={API} toplinks={toplinks} advert={advert} badikhabar={badikhabar.data} todaynews={todaynews.data} />
    </>
  );
}