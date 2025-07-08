import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Pop Art Graphic Tee",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      tag: "NEW!"
    },
    {
      id: 2,
      name: "Retro Comic Jacket",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      tag: "HOT!"
    },
    {
      id: 3,
      name: "Warhol Style Print",
      price: "$45.99",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Pop Sneakers",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      tag: "SALE!"
    }
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-6xl comic-text text-black mb-4" style={{ textShadow: '4px 4px 0px #32CD32' }}>
            FEATURED ITEMS
          </h2>
          <p className="text-xl handwritten text-gray-600 bg-yellow-200 inline-block px-6 py-2 transform -rotate-1 border-3 border-black">
            Handpicked just for you! 🎯
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bounce-btn px-8 py-4 text-2xl handwritten font-bold text-white">
            View All Products! 🛍️
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-4xl opacity-50">💫</div>
      <div className="absolute top-20 right-20 text-3xl opacity-50">🎪</div>
      <div className="absolute bottom-20 left-20 text-4xl opacity-50">🌟</div>
    </section>
  );
};

export default FeaturedProducts;