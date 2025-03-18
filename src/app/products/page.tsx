import { Footer } from "../components/Footer";
import ProductList from "../components/ProductList";

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <ProductList />;
    </div>
  );
}
