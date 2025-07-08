const Hero = () => {
  return (
    <section className="pop-bg min-h-[600px] flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-7xl md:text-9xl font-bold comic-text text-white mb-6 transform -rotate-2">
          BOOM!
        </h2>
        <p className="text-3xl handwritten text-black bg-yellow-300 inline-block px-6 py-2 transform rotate-1 border-4 border-black mb-8">
          Express Yourself with Pop Art Style!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bounce-btn px-8 py-4 text-2xl handwritten font-bold text-white">
            Shop Now! 🎨
          </button>
          <button className="bounce-btn px-8 py-4 text-2xl handwritten font-bold text-white" style={{animationDelay: '0.5s'}}>
            New Collection! ✨
          </button>
        </div>
      </div>
      
      {/* Floating comic elements */}
      <div className="absolute top-20 left-10 text-6xl animate-bounce">💥</div>
      <div className="absolute top-40 right-20 text-5xl animate-bounce" style={{animationDelay: '0.5s'}}>⭐</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-bounce" style={{animationDelay: '1s'}}>🎭</div>
      <div className="absolute bottom-40 right-10 text-5xl animate-bounce" style={{animationDelay: '1.5s'}}>🎨</div>
    </section>
  );
};

export default Hero;