import Head from "next/head";
import Home from "./home";
import axios from "axios";

export default function Index({ categoryList }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        €
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Home categoryList={categoryList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  return {
    props: {
      categoryList: res.data ? res.data : [],
    },
  };
};
