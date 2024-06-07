import HomePage from "./components/HomePage";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main className="">
      <HomePage />
      <div></div>
    </main>
  );
}
