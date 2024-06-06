import Image from "next/image";
import { db } from "./server/db/schema";
import ProductList from "./components/ProductList";
import HomePage from "./components/HomePage";

export const dynamic = "force-dynamic";

const imageUrls = [
  "https://utfs.io/f/69cffd4e-1b68-4ae1-9d94-c9958da17ac9-fsrxvh.jpeg",
  "https://utfs.io/f/1fee7778-5bd8-421a-b1b1-493c05adfe3b-mhk8zl.jpg",
];

const images = imageUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function Home() {
  return (
    <main className="">
      <HomePage />
      <div>
        <ProductList />
      </div>
    </main>
  );
}
