interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  tag?: string;
}

const ProductCard = ({ name, price, image, tag }: ProductCardProps) => {
  return (
    <div className="pop-frame bg-white p-4 hover:cursor-pointer group">
      <div className="relative overflow-hidden mb-4">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {tag && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 transform rotate-12 border-2 border-black handwritten font-bold">
            {tag}
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-2xl comic-text">CLICK ME!</span>
        </div>
      </div>
      
      <h3 className="text-xl handwritten font-bold mb-2 text-black">{name}</h3>
      <p className="text-2xl comic-text text-green-500 mb-4">{price}</p>
      
      <div className="flex gap-2">
        <button className="flex-1 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-2 border-3 border-black handwritten font-bold hover:from-emerald-400 hover:to-green-400 transition-all transform hover:scale-105">
          Add to Cart
        </button>
        <button className="bg-yellow-400 p-2 border-3 border-black hover:bg-yellow-300 transition-colors">
          ❤️
        </button>
      </div>
    </div>
  );
};

export default ProductCard;