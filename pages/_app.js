import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
