import { ShoppingCart, Package } from "lucide-react";
import Image from "next/image";
import { useCart } from "../context/cartContext";
const products = [
  {
    id: 1,
    title: "Fresh Tomatoes",
    description:
      "Premium locally grown tomatoes, vine-ripened for maximum flavor.",
    image: "/product.jpeg",
    price: 45.99,
    unit: "kg",
    stock: 250,
    category: "Fresh Produce",
  },
  {
    id: 2,
    title: "Fresh Lettuce",
    description:
      "Crisp iceberg and romaine lettuce, perfect for salads and sandwiches.",
    image: "/product.jpeg",
    price: 32.5,
    unit: "kg",
    stock: 180,
    category: "Fresh Produce",
  },
  {
    id: 3,
    title: "Premium Beef",
    description:
      "High-quality frozen beef cuts, perfect for restaurants and butchers.",
    image: "/product.jpeg",
    price: 189.99,
    unit: "kg",
    stock: 120,
    category: "Frozen Foods",
  },
  {
    id: 4,
    title: "Frozen Chicken",
    description: "Grade A frozen chicken, whole or portions available.",
    image: "/product.jpeg",
    price: 85.99,
    unit: "kg",
    stock: 200,
    category: "Frozen Foods",
  },
  {
    id: 5,
    title: "White Rice",
    description: "Premium long grain white rice, 25kg bags available.",
    image: "/product.jpeg",
    price: 425.0,
    unit: "25kg bag",
    stock: 75,
    category: "Dry Goods",
  },
  {
    id: 6,
    title: "Pasta Variety Pack",
    description:
      "Assorted pasta shapes including penne, spaghetti, and fusilli.",
    image: "/product.jpeg",
    price: 95.0,
    unit: "5kg box",
    stock: 150,
    category: "Dry Goods",
  },
  {
    id: 7,
    title: "Soft Drinks",
    description: "Popular cola and lemon beverages, 24-pack cases.",
    image: "/product.jpeg",
    price: 185.0,
    unit: "case",
    stock: 300,
    category: "Beverages",
  },
  {
    id: 8,
    title: "Fresh Juice",
    description: "100% pure orange and apple juice, 1L bottles.",
    image: "/product.jpeg",
    price: 45.0,
    unit: "liter",
    stock: 220,
    category: "Beverages",
  },
  {
    id: 9,
    title: "Fresh Carrots",
    description:
      "Sweet, crunchy carrots perfect for cooking or raw consumption.",
    image: "/product.jpeg",
    price: 28.99,
    unit: "kg",
    stock: 190,
    category: "Fresh Produce",
  },
  {
    id: 10,
    title: "Frozen Fish Fillets",
    description: "Premium white fish fillets, individually quick frozen.",
    image: "/product.jpeg",
    price: 165.0,
    unit: "kg",
    stock: 95,
    category: "Frozen Foods",
  },
  {
    id: 11,
    title: "Coffee Beans",
    description: "Premium Arabica coffee beans, medium roast.",
    image: "/product.jpeg",
    price: 320.0,
    unit: "kg",
    stock: 60,
    category: "Dry Goods",
  },
  {
    id: 12,
    title: "Cooking Oil",
    description: "Sunflower cooking oil, 5L bottles for commercial use.",
    image: "/product.jpeg",
    price: 89.99,
    unit: "5L bottle",
    stock: 140,
    category: "Dry Goods",
  },
];

export function Products() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of quality food products with
            competitive wholesale pricing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                  width={500}
                  height={384}
                />
                <div className="absolute top-2 right-2 bg-green-700 text-white px-3 py-1 rounded-full text-sm">
                  {product.category}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {product.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl text-green-700">
                        R{product.price.toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-500">
                        per {product.unit}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Package className="w-4 h-4" />
                      <span>{product.stock} in stock</span>
                    </div>
                  </div>

                  {product.stock > 0 ? (
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-green-700 text-white px-4 py-3 rounded-lg hover:bg-green-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-gray-300 text-gray-500 px-4 py-3 rounded-lg cursor-not-allowed"
                    >
                      Out of Stock
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
