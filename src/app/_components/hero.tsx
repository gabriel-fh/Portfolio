function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(177,177,176,0.030)_1px,transparent_1px),linear-gradient(90deg,rgba(177,177,176,0.030)_1px,transparent_1px)] bg-size-[50px_50px]"></div>

      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-6">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span>Gabriel</span>
            <br />
            <span className="neon-text glow-pulse">Hermenegildo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray">
            Desenvolvedor Front-End <span className="text-primary">*</span>
          </p>
          <p className="text-lg text-gray leading-relaxed">Criando bugs desde o primeiro <span className="markdown-code">Hello World</span> em C</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
