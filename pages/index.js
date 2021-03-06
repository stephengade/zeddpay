/* eslint-disable react/jsx-key */
import Head from "next/head";

import AeroHome from "../components/AeroHome/AeroHome";

export default function Home() {

  return (
    <div>
      <Head>
        <title>ZeddPay Africa - Giving Airtime Superpower 🤗</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AeroHome />
    </div>
  );
}
