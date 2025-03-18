import { getProducts } from "../server/db/queries";
import Image from "next/image";
import Link from "next/link";

export default async function ProductList() {
  const products = await getProducts();

  return (
    <div className="w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Premium Landscaping Products
        </h2>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our selection of high-quality materials for your next landscaping project
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]"
          >
            <Link href={`/product/${product.id}`} className="block relative">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  width={500}
                  height={500}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                  View Details
                </span>
              </div>
            </Link>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
