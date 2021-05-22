import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
