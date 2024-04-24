import React from "react";
import Detail from "./_component/detail";

const API = process.env.API;

async function fetchNews(id) {
  try {
    const badikhabar = await fetch(`${process.env.API}/api/blogs?order=${id}`, { cache: 'no-store' })
    return badikhabar.json();
  } catch (error) {
    console.error("Error fetching Rajiyablogs:", error);
    throw error;
  }
}


export const page = async ({ params }) => {
  const id = params.id[0];
  const News = await fetchNews(id);

  return (
    <>
      <Detail
        params={params}
        newsdata={News.data[0]}
        API={process.env.API}
      />
    </>
  );
};

export default page;

export async function generateMetadata({ params }, parent) {
  
  const currentPageUrl =
    typeof window !== "undefined" ? window.location.href : "";
  const id = params.id[0];
  const News = await fetchNews(id);
  

  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: News && News.data[0].Heading,
    // description: product.data[0].Matter.slice(0, 82),
    openGraph: {
      images: [`${API}${News.data[0].Image}`],
      url: currentPageUrl,
    },
  };
}
