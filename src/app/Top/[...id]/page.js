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
  try {
    const id = params.id[0];
    const News = await fetchNews(id);

    // Check if News and News.data[0] are defined before accessing properties
    if (News && News.data && News.data[0]) {
      return (
        <Detail
          params={params}
          newsdata={News.data[0]}
          API={process.env.API}
        />
      );
    } else {
      console.warn("News data is empty or undefined");
      return <div className="my-5 text-center">No news data available.</div>;
    }
  } catch (error) {
    console.error("Error rendering page:", error);
    return <div>Error rendering page. Please try again later.</div>;
  }
};

export default page;

// export async function generateMetadata({ params }, parent) {
  
//   const currentPageUrl =
//     typeof window !== "undefined" ? window.location.href : "";
//   const id = params.id[0];
//   const News = await fetchNews(id);
  

//   const previousImages = (await parent).openGraph?.images || [];
//   return {
//     title: News && News.data[0].Heading,
//     // description: product.data[0].Matter.slice(0, 82),
//     openGraph: {
//       images: [`${API}${News.data[0].Image}`],
//       url: currentPageUrl,
//     },
//   };
// }
export async function generateMetadata({ params }) {
  try {
    const id = params.id[0];
    const News = await fetchNews(id);
    const currentPageUrl = typeof window !== "undefined" ? window.location.href : "";

    // Check if News and News.data[0] are defined before accessing properties
    if (News && News.data && News.data[0]) {
      return {
        title: News.data[0].Heading,
        openGraph: {
          images: [`${API}${News.data[0].Image}`],
          url: currentPageUrl,
        },
      };
    } else {
      console.warn("News data is empty or undefined");
      return {}; // Return empty metadata if data is not available
    }
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {}; // Return empty metadata in case of error
  }
}