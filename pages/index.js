import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Home from "./Home";

export default function Home1() {
  return (
    <div>
      <Head>
        <title>Objectual Systems Limited</title>
        <meta name="description" content="Objectual Systems Limited" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="true"
        />

        <script defer src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script
          defer
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        ></script>
        <script
          defer
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        ></script>
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"
        ></script>
      </Head>

      <div id="main-home" className="App">
        <Home />
      </div>
    </div>
  );
}
