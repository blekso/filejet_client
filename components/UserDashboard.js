export default function UserDashboard({ state }) {
  const { stars } = getInitialProps();

  return (
    <>
      <p>{state.token}</p>
      <div>Next stars: {stars}</div>
    </>
  );
}

async function getInitialProps() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
}
