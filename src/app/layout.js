import "./global.css";
import "./style.scss";
import "./bootstrap.min.css";
import Header from "./_component/Header";
import Footer from "./_component/Footer";
import { AppProvider } from "./_context/AppContext";
import Script from "next/script";
import {fetchTopLinks, fetchTodayNews, fetchBadikhabar,fetchAdvert,fetchTagline,fetchTopKhabare,fetchIdharbhi,fetchAllBlogs,fetchRajiyablogs } from "./_service_Api/ServiceAPI";


export const metadata = {
  title: "Welcome to Third Eye World News",
  description: "Welcome To Third Eye World News",
};

const API = process.env.API;

export default async function RootLayout({ children }) {

  const todaynews = await fetchTodayNews();
  const badikhabar = await fetchBadikhabar();
  const toplinks = await fetchTopLinks();
  const advert = await fetchAdvert();
  const tagline = await fetchTagline();
  const topKhabare = await fetchTopKhabare();
  const idharbhi = await fetchIdharbhi();
  const allblogs = await fetchAllBlogs();
  const Rajiyablogs = await fetchRajiyablogs();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E7NY2W59JZ"
        />

        <Script id="google-analytics">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
  `}
        </Script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1916128346888150"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <AppProvider>
          <Header
            API={API}
            advert={advert}
            tagline={tagline}
            allblogs={allblogs.data}
            Rajiyablogs={Rajiyablogs.data}
            toplinks={toplinks}
            topKhabare={topKhabare.data}
            todaynews={todaynews.data}
            badikhabar={badikhabar.data}
          />
          {children}
          <Footer
            API={API}
            advert={advert}
            idharbhi={idharbhi.data}
            toplinks={toplinks}
           
          />
        </AppProvider>
      </body>
    </html>
  );
}
