const Footer = () => {
  return (
    <footer className="bg-white border-t-8 border-black zigzag-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl comic-text text-black mb-4" style={{ textShadow: '2px 2px 0px #32CD32' }}>
              POP SHOP
            </h3>
            <p className="handwritten text-gray-600 mb-4">
              Where art meets fashion! Express yourself with bold, unique designs.
            </p>
            <div className="flex gap-3">
              <button className="bg-green-400 p-2 border-3 border-black hover:bg-green-300 wiggle">📱</button>
              <button className="bg-blue-400 p-2 border-3 border-black hover:bg-blue-300 wiggle">🐦</button>
              <button className="bg-purple-400 p-2 border-3 border-black hover:bg-purple-300 wiggle">📷</button>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl handwritten font-bold mb-4">Shop</h4>
            <ul className="space-y-2 handwritten text-gray-600">
              <li><a href="#" className="hover:text-green-500">New Arrivals</a></li>
              <li><a href="#" className="hover:text-emerald-500">Clothing</a></li>
              <li><a href="#" className="hover:text-blue-500">Art Prints</a></li>
              <li><a href="#" className="hover:text-lime-500">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl handwritten font-bold mb-4">Support</h4>
            <ul className="space-y-2 handwritten text-gray-600">
              <li><a href="#" className="hover:text-green-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-emerald-500">Size Guide</a></li>
              <li><a href="#" className="hover:text-blue-500">Shipping</a></li>
              <li><a href="#" className="hover:text-lime-500">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl handwritten font-bold mb-4">About</h4>
            <ul className="space-y-2 handwritten text-gray-600">
              <li><a href="#" className="hover:text-green-500">Our Story</a></li>
              <li><a href="#" className="hover:text-emerald-500">Artists</a></li>
              <li><a href="#" className="hover:text-blue-500">Sustainability</a></li>
              <li><a href="#" className="hover:text-lime-500">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-4 border-dashed border-gray-300 mt-8 pt-8 text-center">
          <p className="handwritten text-gray-600">
            © 2024 Pop Shop. Made with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;