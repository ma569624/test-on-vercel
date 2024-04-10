import Image from "next/image";



export default async function Main() {
  const API = process.env.API
 
  return (

    <>
      <h1>{API}</h1>
    </>
  );
}
