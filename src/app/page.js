import Image from "next/image";
import Home from "./_component/home";



export default async function Main() {
  const API = process.env.API
  // let toplinks, advert, todaynews, badikhabar;
  let toplinks = await fetch(`${API}/api/toplinks`).then((res) => res.json())
  // let advert = await fetch(`${API}/api/advert?Status=active`).then((res) => res.json())
  let todaynews = await fetch(`${API}/api/blogs?Status=active&Category=primenews`).then((res) => res.json())
  let badikhabar = await fetch(`${API}/api/blogs?Status=active&Category=mainnews`).then((res) => res.json())

  return (

    <>
      <h1> this is api {API} {
        toplinks.map((item) => <>{item._id}</>)
      }</h1>
      <h1> this is api for advert {API} {
        todaynews.data.map((item) => <>{item._id}</>)
      }</h1>
      <h1> this is api for advert {API} {
        badikhabar.data.map((item) => <>{item._id}</>)
      }</h1>
      {/* <Home API={API} toplinks={toplinks} advert={advert} badikhabar={badikhabar.data} todaynews={todaynews.data} /> */}
    </>
  );
}
