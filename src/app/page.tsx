import Image from "next/image";
import { db } from "./server/db/schema";

export const dynamic = "force-dynamic";

const imageUrls = [
  "https://utfs.io/f/69cffd4e-1b68-4ae1-9d94-c9958da17ac9-fsrxvh.jpeg",
];

const images = imageUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function Home() {
  const products = await db.query.product.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

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
        <h1 className="text-3xl font-bold">Products</h1>
        {products.map((product) => (
          <div key={product.id} className="flex w-100 flex-col p-4">
            <div className="text-xl font-semibold">{product.title}</div>{" "}
            <img
              src={product.image}
              alt="image"
              className="object-contain w-48 h-96"
            ></img>{" "}
            {product.description}
          </div>
        ))}
      </div>
    </main>
  );
}
