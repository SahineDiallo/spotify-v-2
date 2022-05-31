import Head from "next/head";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Spotify clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />
        <MainContent />
      </main>
    </div>
  );
}
