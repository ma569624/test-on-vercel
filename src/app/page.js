import Image from "next/image";



export default async function Main() {
  const API = process.env.API
  let toplinks = await fetch(`${API}/api/toplinks`).then((res) => res.json())

  return (

    <>
      <h1> this is api {API} {
        toplinks.map((item) => <>{item._id}</>)
      }</h1>
      {/* <Home API={API} toplinks={toplinks} advert={advert} badikhabar={badikhabar.data} todaynews={todaynews.data} /> */}
    </>
  );
}
