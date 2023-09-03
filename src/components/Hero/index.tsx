import React from "react";

const Hero = () => {
  return (
    <div className="bg-slate-900 h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-center p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Inicio
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              A ong
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Sobre nós
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Contato
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
              MUDE POR AMOR
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Oferecendo assistência voluntária para pessoas em situação de rua
              e famílias em situação de vulnerabilidade social, gerando impacto
              e transformações através do trabalho em equipe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
