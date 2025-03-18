import React from 'react';
import { getProduct } from '@/app/server/db/queries';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/app/components/Footer';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(parseInt(params.id));

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Products</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-[400px] md:h-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-30"></div>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {product.title}
                  </h1>
                  
                  <div className="mb-8 mt-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-3">Product Details</h2>
                    <p className="text-gray-700 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-8">
                    <h2 className="text-lg font-semibold text-gray-900 mb-3">Ready to Order?</h2>
                    <p className="text-gray-700 mb-6">
                      Contact us today to request a custom quote for your landscaping needs.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link 
                    href="/contact" 
                    className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 w-full md:w-auto text-center"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Our Products?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-700">All our landscaping materials are sourced from premium suppliers to ensure the highest quality.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Advice</h3>
                <p className="text-gray-700">Our team of experts can help you choose the right products for your specific landscaping needs.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-700">We offer fair and transparent pricing on all our landscaping materials without compromising on quality.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
