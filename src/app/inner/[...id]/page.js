import React from 'react';
import Detail from './_component/detail';

export const page = async ({ params }) => {
    const id = params.id[0];
    // const Category = params.section;
    console.log(params)
    const newsdata = await fetch(`${process.env.API}/api/blogs?_id=${id}`).then((res) => res.json())
    const toplinks = await fetch(`${process.env.API}/api/toplinks`).then((res) => res.json())
    const blogdisplay = await fetch(`${process.env.API}/api/blogdisplay`).then((res) => res.json())
    const rajiya = await fetch(`${process.env.API}/api/rajiya`).then((res) => res.json())

    return (
        <>
            <Detail params={params}  newsdata={newsdata.data[0]} toplinks={toplinks} blogdisplay={blogdisplay} rajiya={rajiya} API={process.env.API}  />
        </>
    );
};

export default page;


export async function generateMetadata({ params }, parent) {
    const id = params.id[0]
    const product = await fetch(`${process.env.API}/api/blogs?_id=${id}`).then((res) => res.json())
    const previousImages = (await parent).openGraph?.images || []
    return {
        title: product.data[0].Heading,
        openGraph: {
            images: [`https://new-backend-server-production.up.railway.app${product.data[0].Image}`],
        },
        
    }
}
