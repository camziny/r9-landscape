import Image from "next/image";
import ProductList from "./ProductList";
import GoogleMapComponent from "./GoogleMap";
import Link from "next/link";

export const dynamic = "force-dynamic";

const logoUrl =
  "https://utfs.io/f/509bc951-a539-40d6-9aa3-c50d07f72748-fsrxvh.png";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-white">
        {/* Decorative pattern background */}
        <div className="absolute inset-0 opacity-5 pattern-bg"></div>
        
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Premium Landscaping Materials
              </h1>
              <div className="w-24 h-1 bg-green-600 my-6"></div>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl">
                Your one-stop shop for quality landscaping products in Westborough, MA
              </p>
              <p className="mt-6 text-base text-gray-500 max-w-2xl">
                From premium topsoil and nutrient-rich compost to decorative mulches
                and durable hardscaping materials, our selection is designed to help
                you achieve stunning results for your outdoor projects.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products" 
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Browse Products
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-80 lg:h-96">
                <Image
                  src={logoUrl}
                  alt="Route 9 Landscape Products"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Features section */}
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Premium Quality</h3>
                <p className="mt-2 text-gray-600">
                  Carefully selected materials that meet our high standards for durability and performance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Wide Selection</h3>
                <p className="mt-2 text-gray-600">
                  Extensive range of landscaping materials to suit every project need and design preference.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75c-1.214 0-2.025.809-3 .809-2.25 0-3-2.25-3-2.25s1.75-2.25 3-2.25c.214 0 1.607.082 1.607.82 0 .427-.915.828-2.607.828-3 0-3.75-2.25-3.75-2.25s2.25-1.5 2.25-3.75c0-1.75 1.5-2.25 1.5-2.25s2.25.75 2.25 2.25c0 .871-.621 1.114-.621 1.114.121.043.243.043.371.043 1.75 0 2.25-1.5 2.25-1.5s-.75 3.75-3.75 3.75c-2.25 0-2.25-1.5-2.25-1.5s1.5-1.5 1.5-3c0-1.586-.383-3.75-2.25-3.75-1.5 0-2.25 1.5-2.25 2.25s1.5 2.25 1.5 2.25-1.5.75-1.5 3-.75 2.25-.75 2.25" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Expert Advice</h3>
                <p className="mt-2 text-gray-600">
                  Our knowledgeable team is ready to help with product selection and project guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="parallax"></div>
      <ProductList />
      <div className="flex justify-center p-4 flex-grow">
        <GoogleMapComponent />
      </div>
    </div>
  );
}
