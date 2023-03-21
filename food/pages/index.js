import Head from "next/head";
import Header from "../components/layout/Header";
import Home from "./home";
import Input from "../components/form/Input"

export default function Index() {
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
      <Home />
    </div>
  );
}
