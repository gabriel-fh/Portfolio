import { Button } from "./button";
import { Icon } from "@iconify/react";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(177,177,176,0.030)_1px,transparent_1px),linear-gradient(90deg,rgba(177,177,176,0.030)_1px,transparent_1px)] bg-size-[50px_50px]"></div>

      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-6">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span>Gabriel</span>
            <br />
            <span className="text-primary glow-pulse">Hermenegildo</span>
          </h1>
          <p className="text-xl md:text-2xl text-light-gray">
            Desenvolvedor Front-End <span className="text-primary-neon/50">*</span>
          </p>
          <p className="text-lg text-gray leading-relaxed">
            Criando bugs desde o primeiro <span className="markdown-code">Hello World</span> em C
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg">
            <Icon icon="iconoir:terminal" className="mr-2 h-5 w-5 icon-neon" />
            Abrir Terminal
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
          >
            <a href="https://github.com/gabriel-fh" target="_blank" rel="noopener noreferrer">
              <Icon
                icon="mdi:github"
                className="mr-2 h-6 w-6"
              />{" "}
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
