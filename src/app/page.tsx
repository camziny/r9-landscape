import Image from "next/image";
import { db } from "./server/db/schema";

const imageUrls = [
  "https://utfs.io/f/69cffd4e-1b68-4ae1-9d94-c9958da17ac9-fsrxvh.jpeg",
];

const images = imageUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function Home() {
  const products = await db.query.product.findMany();

  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Route 9 Landscape Products
      </h1>
      <div className="flex flex-wrap justify-center">
        {images.map((image) => (
          <div key={image.id} className="w-1/2 p-4">
            <img src={image.url} alt="image" className="object-fill" />
          </div>
        ))}
      </div>
      <div>
        {products.map((product) => (
          <div key={product.id}> {product.title} </div>
        ))}
      </div>
    </main>
  );
}
