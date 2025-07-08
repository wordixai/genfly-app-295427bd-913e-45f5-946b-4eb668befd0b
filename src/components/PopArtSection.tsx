const PopArtSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-orange-400 to-yellow-400"></div>
      
      {/* Comic dots background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, #000 2px, transparent 2px),
          radial-gradient(circle at 75% 75%, #fff 3px, transparent 3px)
        `,
        backgroundSize: '40px 40px, 60px 60px',
        opacity: 0.3
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-6xl lg:text-7xl comic-text text-white mb-6 transform -rotate-2">
              BE BOLD!
            </h2>
            <p className="text-xl handwritten text-black bg-white inline-block px-6 py-3 transform rotate-1 border-4 border-black mb-8">
              Stand out from the crowd with our unique pop art designs! 
              Each piece tells a story and makes a statement. 🎨✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bounce-btn px-6 py-3 text-xl handwritten font-bold text-white">
                Explore Art 🎭
              </button>
              <button className="bounce-btn px-6 py-3 text-xl handwritten font-bold text-white" style={{animationDelay: '0.3s'}}>
                Join Community 👥
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="pop-frame bg-white p-6">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop"
                alt="Pop Art Collection"
                className="w-full h-80 object-cover"
              />
            </div>
            
            {/* Speech bubbles */}
            <div className="absolute -top-5 -right-5 bg-white border-4 border-black px-4 py-2 handwritten font-bold transform rotate-12">
              WOW! 💥
            </div>
            <div className="absolute -bottom-5 -left-5 bg-yellow-300 border-4 border-black px-4 py-2 handwritten font-bold transform -rotate-12">
              Amazing! ⭐
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopArtSection;