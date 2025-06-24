"use client";

import { Fireworks } from 'fireworks-js';
import { useRef } from 'react';

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { useState } from 'react';

export default function HomePage() {
  const fireworksRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, speed: 5 },
    [Autoplay()]
  );

  useEffect(() => {
  if (emblaApi) emblaApi.reInit();

  const onScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', onScroll);

  let fireworksInstance;
  if (fireworksRef.current) {
    // Esperá a que el DOM esté listo
    setTimeout(() => {
      fireworksInstance = new Fireworks(fireworksRef.current, {
        hue: { min: 0, max: 360 },
        delay: { min: 15, max: 30 },
        speed: 2,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        trace: 3,
        explosion: 5,
        autoresize: true,
        brightness: { min: 50, max: 80 },
        decay: { min: 0.015, max: 0.03 },
      });
      fireworksInstance.start();
    }, 100); // Espera breve
  }

  return () => {
    window.removeEventListener('scroll', onScroll);
    if (fireworksInstance) fireworksInstance.stop();
  };
}, [emblaApi]);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

{/* Encabezado */}
<header className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500 ${ scrolled ? 'bg-[#084866]/90 backdrop-blur py-3' : 'bg-transparent py-6'}`}>
  <div className={`container mx-auto px-4 flex items-center transition-all duration-500 ${ scrolled ? 'justify-center' : 'justify-between'}`}>
    {/* Logo + Texto juntos */}
    <h1 className={`text-3xl font-bold flex items-center gap-2 transition-all duration-500 ${ scrolled ? 'justify-center' : ''}`}>
      <img
        src="/images/Logo_SinLetras.png"
        alt="Logo Cine"
        className={`h-[1em] transition-all duration-500 ${
          scrolled ? 'scale-110' : ''
        }`}
      />
      Cine Entre Montañas
    </h1>

    {/* Íconos sociales solo visibles si no hay scroll */}
    {!scrolled && (
      <div className="flex space-x-4 transition-opacity duration-300">
        <a
          href="https://www.facebook.com/cine.entre.montanas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/cine.entre.montanas?igsh=MWI0NzIwNWpwemhtOQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    )}
  </div>
</header>



{/* Carrusel */}
    <section style={{ background: 'linear-gradient(to top, #1E1E1E, #1E1E1E)', color: 'white' }}>
  <div className="w-full h-[80vh] overflow-hidden">
    <video
      className="w-full h-full object-cover"
      src="/videos/intro.mp4" // asegurate que el video esté en /public/videos/
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
</section>

{/* Logo */}
  <section className="flex justify-center z-10">
    <div className="absolute top-32 sm:top-80 w-[30%] md:w-[20%]">

    </div>
  </section>

  {/* Fuegos artificiales */}
  <section className="relative w-full h-[600px] text-white overflow-hidden">
 <div ref={fireworksRef} className="absolute inset-0 z-0 w-full h-full" style={{ backgroundColor: '#3A3A3A' }} />
  <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/50 px-4 text-center">
    <h2 className="text-4xl font-bold mb-4"> ¡Próxima Proyección!</h2>
    <img
      src="/images/pelicula1.png"
      alt="Próxima película"
      className="w-full max-w-md rounded shadow-lg mb-4 object-cover aspect-[16/9]"
    />
    <h3 className="text-2xl font-semibold">El Dorado</h3>
    <p className="text-lg mt-2">Viernes 27 de Junio, 6:00pm en Caburé</p>
  </div>
</section>





{/* Proximamente   */} 
  <section
  style={{ backgroundImage: 'url("/images/mv-cf.jpg")', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white'}}>
  <div className="py-12 bg-black/60">
    <div className="container mx-auto px-4">
      <h3 className="text-2xl font-semibold mb-6">🎬 Próximamente</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#1E1E1E]/50 ">
                <img
                  src="/images/Proximamente1.jpeg"
                  alt="Próximamente 1"
                  className="w-full aspect-[16/9] object-cover rounded mb-4"
                />
                <h4 className="text-xl font-bold mb-2">TRASH</h4>
                <p className="mb-2">Despues de encontrar una billetera en un basurero se ven envueltos en una peligrosa aventura contra la corrupción.</p>
              </div>

              <div className="bg-[#1E1E1E]/50 ">
                <img
                  src="/images/Proximamente2.jpeg"
                  alt="Próximamente 2"
                  className="w-full aspect-[16/9] object-cover rounded mb-4"
                />
                <h4 className="text-xl font-bold mb-2">CUANDO EL RÍO SUENA PIEDRAS TRAE</h4>
                <p className="mb-2">El filme aborda un trágico suceso ocurrido en el río Guacimal, ubicado en Guanacaste, Costa Rica, relacionado con la conservación de la naturaleza.</p>
              </div>

              <div className="bg-[#1E1E1E]/50 ">
                <img
                /* bg-white */
                  src="/images/pelicula3.png"
                  alt="Película 1"
                  className="w-full aspect-[16/9] object-cover rounded mb-4"
                />
                <h4 className="text-xl font-bold mb-2">Intensamente 2</h4>
                <p className="mb-4">Sigue a Riley en su adolescencia, enfrentando nuevas emociones como Ansiedad, Envidia y Vergüenza. Las emociones originales deben adaptarse al cambio, mientras el equilibrio emocional de Riley se pone a prueba.</p>
              </div>

              <div className="bg-[#1E1E1E]/50 ">
                <img
                /* bg-white */
                  src="/images/Proximamente3.jpeg"
                  alt="Película 1"
                  className="w-full aspect-[16/9] object-cover rounded mb-4"
                />
                <h4 className="text-xl font-bold mb-2">Yo, También</h4>
                <p className="mb-4">Yo También cuenta la historia de Daniel, un joven con síndrome de Down que trabaja como funcionario y se enamora de Laura, una compañera sin discapacidad. La película explora el amor, la inclusión y los prejuicios con sensibilidad y humanidad.</p>
              </div>


      </div>
    </div>
  </div>
</section>    


{/* Sobre Nosotros */}  
      <section style={{ backgroundColor: '#1E1E1E', color: 'white' }}>
        <div className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Sección de texto - 70% */}
              <div className="w-full md:w-[70%]">
                <h2 className="text-4xl font-extrabold mb-8 text-center md:text-left">
                  <span className="text-600">Sobre Nosotros</span>
                </h2>
                <p className="text-lg mb-6 leading-relaxed">
                  Somos un proyecto de cine comunitario que crea espacios de encuentro y diálogo en Monteverde y comunidades cercanas. Más que proyecciones, buscamos conectar personas y generar transformaciones a través de las historias.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Llevamos cine gratuito y de calidad a zonas rurales, promoviendo el acceso a la cultura, la diversidad y el conocimiento. A través de funciones al aire libre, talleres y festivales itinerantes, impulsamos la reflexión, el aprendizaje y la construcción colectiva.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Creemos en el cine como una herramienta para fortalecer el tejido social, inspirar cambios y compartir experiencias que nos unen como comunidad.
                </p>
              </div>

              {/* Sección de imagen - 30% */}
              <div className="w-full md:w-[30%] flex justify-center">
                <img
                  src="/images/Somos1.jpeg"
                  alt="Sobre Nosotros"
                  className="rounded-xl shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Divisor */}  


{/* ¿Cómo podés apoyarnos? */}  
      <section
  style={{
    backgroundImage: 'url("/images/mv-cf2.jpg")', // 🖼️ poné tu imagen real
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white'
  }}
  className="py-16"
>
  {/* Capa oscura encima para contraste */}
  <div className="bg-[#084866]/90 py-16">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Imagen - 30% */}
        <div className="w-full md:w-[30%] flex justify-center">
          <img
            src="/images/Somos2.jpeg"
            alt="Apoyanos"
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </div>

        {/* Texto - 70% */}
        <div className="w-full md:w-[70%]">
          <h2 className="text-4xl font-extrabold text-gray-100 mb-8 text-center md:text-left">
            <span className="text-600">¿Cómo podés apoyarnos?</span>
          </h2>

          <ul className="text-lg text-gray-100 mb-6 leading-relaxed list-disc list-inside">
            <li>Apoyando en la logística de las proyecciones.</li>
            <li>Ayudando en la difusión de eventos.</li>
            <li>Guiando talleres o cineforos.</li>
            <li>Colaborando con donaciones.</li>
            <li>Claro, ¡asistiendo a las proyecciones!</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl mt-8 text-center mx-auto italic">
        Cada gesto cuenta. Ya sea grande o pequeño, tu apoyo nos impulsa a seguir compartiendo cine, cultura y momentos de encuentro.
      </h2>
    </div>
  </div>
</section>

{/* Alianzas  */}
      <section className="bg-white py-8 ">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl font-extrabold text-gray-800 ">
                <span className="text-600">Alianzas</span>
              </h2>
            </div>
          <div className="flex justify-center">
            <img
              src="/images/alianzas.jpeg"
              alt="alianzas"
              className=" object-contain"
            />
          </div>
      </section>
       

{/* footer */} 
      <footer className="text-white py-8" style={{ backgroundColor: '#1E1E1E', color: 'white' }}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="mb-4">© 2025 Cine Entre Montañas.</p>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
          </p>

          <div className="flex space-x-4">
            <a href="https://www.facebook.com/cine.entre.montanas" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/cine.entre.montanas?igsh=MWI0NzIwNWpwemhtOQ==" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </footer>
    </main>
    )
  }


