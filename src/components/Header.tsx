import { ShoppingCart, Heart, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-10 bg-white border-b-8 border-black zigzag-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-4xl font-bold comic-text text-black" style={{ textShadow: '4px 4px 0px #32CD32' }}>
              POP SHOP
            </h1>
            <div className="hidden md:block">
              <span className='text-gray-600 text-xl handwritten transform -rotate-3 inline-block'>✨ Art Meets Fashion! ✨

              </span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="handwritten text-lg hover:text-green-500 transition-colors font-bold">
              New Arrivals
            </a>
            <a href="#" className="handwritten text-lg hover:text-emerald-500 transition-colors font-bold">
              Clothing
            </a>
            <a href="#" className="handwritten text-lg hover:text-blue-500 transition-colors font-bold">
              Art Prints
            </a>
            <a href="#" className="handwritten text-lg hover:text-lime-500 transition-colors font-bold">
              Accessories
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 bg-yellow-400 rounded-full border-3 border-black hover:bg-yellow-300 wiggle">
              <Search className="w-6 h-6" />
            </button>
            <button className="p-2 bg-green-400 rounded-full border-3 border-black hover:bg-green-300 wiggle">
              <Heart className="w-6 h-6" />
            </button>
            <button className="p-2 bg-emerald-400 rounded-full border-3 border-black hover:bg-emerald-300 wiggle relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border-2 border-black">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>);

};

export default Header;