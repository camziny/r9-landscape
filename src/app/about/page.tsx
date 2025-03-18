import Image from "next/image";
import Link from "next/link";

export default function About() {
  const logoUrl =
    "https://utfs.io/f/509bc951-a539-40d6-9aa3-c50d07f72748-fsrxvh.png";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full bg-white overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 opacity-5 pattern-bg"></div>
        <div className="relative max-w-7xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            Route 9 Landscape Products
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
          <p className="max-w-2xl text-lg text-gray-600 leading-relaxed">
            Premium landscaping materials for professionals and homeowners since 2019
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="prose prose-lg text-gray-600 max-w-none order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="mb-5">
              Welcome to Route 9 Landscape Products, your destination for high-quality landscaping materials in Westborough, MA. We opened our doors with a simple mission: to provide premium products with exceptional service.
            </p>
            <p className="mb-5">
              Our carefully selected inventory includes premium mulch products, bulk aggregates, nutrient-rich loam, and decorative stone to transform any outdoor space. We serve both professional landscapers and DIY enthusiasts with the same dedication to quality.
            </p>
            <p>
              What sets us apart is our commitment to customer satisfaction. Our knowledgeable team brings years of landscaping experience and is ready to assist you with expert advice for your next project.
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden shadow-md h-[400px] bg-gray-100 order-1 lg:order-2">
            <Image
              src={logoUrl}
              alt="Route 9 Landscape Products"
              fill
              className="object-contain p-8"
            />
          </div>
        </div>
        
        {/* Values Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Principles</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We source only the finest materials, ensuring everything we sell meets our high standards for durability and performance.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                Our team brings years of landscaping experience, providing valuable guidance to help you make informed decisions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                We build lasting relationships with our customers by providing attentive service and going the extra mile.
              </p>
            </div>
          </div>
        </div>
        
        {/* Product Categories Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Mulch Products</h3>
              <p className="text-gray-600 text-center">
                Our premium mulch products help retain soil moisture, reduce weeds, and enhance the beauty of your landscape.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352a5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Decorative Stones</h3>
              <p className="text-gray-600 text-center">
                Add texture and visual interest with our selection of decorative stones and pebbles for pathways and accent areas.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Bulk Aggregates</h3>
              <p className="text-gray-600 text-center">
                From crushed stone to gravel, our bulk aggregate materials are perfect for driveways, drainage, and foundation work.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-r from-green-700 to-green-900 rounded-lg shadow-lg overflow-hidden">
          <div className="px-8 py-14 md:py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
              Visit our location or contact us today to explore our premium landscaping products
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/products" 
                className="inline-block px-8 py-4 bg-white text-green-800 font-medium rounded-md shadow-md hover:bg-green-50 transition-colors"
              >
                Browse Products
              </Link>
              <Link 
                href="/contact" 
                className="inline-block px-8 py-4 bg-transparent text-white font-medium rounded-md border border-white hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
