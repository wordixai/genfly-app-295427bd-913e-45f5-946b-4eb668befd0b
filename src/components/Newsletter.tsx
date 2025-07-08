const Newsletter = () => {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Comic book halftone pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          radial-gradient(circle at 20% 20%, #32CD32 2px, transparent 2px),
          radial-gradient(circle at 80% 80%, #50C878 2px, transparent 2px)
        `,
        backgroundSize: '30px 30px, 50px 50px',
        opacity: 0.3
      }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-6xl comic-text text-white mb-6" style={{ textShadow: '4px 4px 0px #32CD32' }}>
          STAY IN THE LOOP!
        </h2>
        <p className="text-xl handwritten text-gray-300 mb-8 bg-green-400 inline-block px-6 py-2 transform -rotate-1 border-3 border-white">
          Get the latest drops and exclusive deals! 📧✨
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input 
              type="email" 
              placeholder="your-email@awesome.com"
              className="flex-1 px-4 py-3 border-4 border-white handwritten text-lg bg-white focus:bg-yellow-100 transition-colors"
            />
            <button className="bounce-btn px-6 py-3 text-lg handwritten font-bold text-white whitespace-nowrap">
              Subscribe! 🚀
            </button>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center gap-8">
          <div className="text-center">
            <div className="text-4xl mb-2">🎨</div>
            <span className="handwritten text-white">Weekly Drops</span>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">💰</div>
            <span className="handwritten text-white">Exclusive Deals</span>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">👥</div>
            <span className="handwritten text-white">Community</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;