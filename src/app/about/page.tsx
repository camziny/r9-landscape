import Image from "next/image";
import { Footer } from "../components/Footer";
export default function About() {
  const logoUrl =
    "https://utfs.io/f/509bc951-a539-40d6-9aa3-c50d07f72748-fsrxvh.png";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 py-12 px-4 lg:py-24">
        <div className="relative w-full max-w-md mb-8">
          <Image
            src={logoUrl}
            alt="Logo"
            layout="responsive"
            width={400}
            height={200}
            className="object-contain rounded-md"
          />
        </div>
        <div className="max-w-3xl w-full bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
            About Route 9 Landscape Products
          </h1>
          <p className="text-lg text-center text-gray-700 leading-relaxed">
            Welcome to Route 9 Landscape Products, your new destination for all
            your landscaping needs, conveniently located on Route 9 in
            Westborough, MA. We pride ourselves on offering a wide range of
            high-quality products to both professional landscapers and DIY
            enthusiasts. Our selection includes premium mulch products, bulk
            aggregates, nutrient-rich loam, and beautiful decorative stone to
            enhance your outdoor spaces. In addition to these, we carry an array
            of tools and accessories, bagged goods, and durable pavers and
            cobblestones. Whether you&apos;re embarking on a large-scale
            landscaping project or simply looking to maintain your garden, we
            have everything you need. Our knowledgeable staff is here to assist
            you with expert advice and top-notch customer service. Visit us
            today and discover why Route 9 Landscape Products is the trusted
            choice for landscaping supplies in the Northeast.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
