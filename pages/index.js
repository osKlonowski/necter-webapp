import Head from "next/head";
import MainPageLayout from "../layouts/main-page-layout";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { infoWhatData, infoWhyData } from "../components/InfoSection/Data";

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>NECTER</title>
        <meta name="description" content="Necter - Just Meet!" />
        <meta
          name="keywords"
          content="Necter, Dating, App, SocialApp, MobileApp"
        />
        <meta
          name="author"
          content="TUNED BKT UG - created by Oskar Klonowski"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPageLayout isHome={true}>
        <HeroSection />
        <InfoSection {...infoWhatData} />
        <InfoSection {...infoWhyData} />
      </MainPageLayout>
    </>
  );
}
