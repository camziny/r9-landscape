import Image from "next/image";
import ProductList from "./ProductList";
import { Footer } from "./Footer";
import GoogleMapComponent from "./GoogleMap";

export const dynamic = "force-dynamic";

const logoUrl =
  "https://utfs.io/f/509bc951-a539-40d6-9aa3-c50d07f72748-fsrxvh.png";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white py-12 px-4">
        <div className="relative w-full max-w-md mb-8">
          <Image
            src={logoUrl}
            alt="Logo"
            layout="responsive"
            width={400}
            height={200}
            className="object-contain"
          />
        </div>
        <p className="text-lg md:text-xl text-center text-gray-700 mt-2">
          Your One-Stop Shop for Quality Landscaping Products
        </p>
        <p className="text-sm md:text-md text-center text-gray-600 mt-4 max-w-2xl leading-relaxed px-4">
          At Route 9 Landscape Products, we offer a wide range of high-quality
          materials to meet all your landscaping needs. Whether you&apos;re a
          professional landscaper or a DIY enthusiast, you&apos;ll find
          everything you need to create and maintain beautiful outdoor spaces.
          From premium topsoil and nutrient-rich compost to decorative mulches
          and durable hardscaping materials, our selection is designed to help
          you achieve stunning results. Explore our product range today and
          discover why we&apos;re the trusted choice for landscaping supplies in
          the Northeast.
        </p>
      </div>
      <div className="parallax"></div>
      <ProductList />
      <div className="flex justify-center p-4 flex-grow">
        <GoogleMapComponent />
      </div>
      <Footer />
    </div>
  );
}
