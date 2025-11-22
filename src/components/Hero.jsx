function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 lg:px-16">
      <div className="max-w-2xl">
        <h1 className="text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          Your Name
        </h1>
        <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed">
          Creative Developer & Designer
        </p>
        <p className="mt-6 text-lg text-gray-500 leading-relaxed">
          Building beautiful digital experiences that blend creativity with functionality.
        </p>
        <div className="mt-12 flex gap-6">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 font-medium rounded-lg hover:bg-white/5 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
