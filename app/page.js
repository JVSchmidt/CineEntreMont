"use client";

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
  const [scrolled, setScrolled] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, speed: 5 },
    [Autoplay()]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
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
    <section className="mx-auto bg-gray-200 ">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="relative flex-shrink-0 w-full">
            <img
              src="/images/pelicula1.jpeg"
              alt="Banner 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative flex-shrink-0 w-full">
            <img
              src="/images/pelicula2.jpeg"
              alt="Banner 2"
              className="object-cover w-full h-full "
            />
          </div>
          <div className="relative flex-shrink-0 w-full">
            <img
              src="/images/pelicula3.jpeg"
              alt="Banner 3"
              className="object-cover w-full h-full "
            />
          </div>
          <div className="relative flex-shrink-0 w-full">
            <img
              src="/images/Proximamente1.jpeg"
              alt="Banner 4"
              className="object-cover w-full h-full "
            />
          </div>
          <div className="relative flex-shrink-0 w-full">
            <img
              src="/images/Proximamente2.jpeg"
              alt="Banner 5"
              className="object-cover w-full h-full "
            />
          </div>
          <div className="relative flex-shrink-0 w-full">
            <img
              src="/images/Proximamente3.jpeg"
              alt="Banner 6"
              className="object-cover w-full h-full "
            />
          </div>
        </div>
      </div>
    </section>

{/* Logo */}
  <section className="flex justify-center z-10">
    <div className="absolute top-32 sm:top-120 w-[30%] md:w-[20%]">
      <img
        src="/images/Logo_Negro.png"
        alt="Logo de Cine entre montañas"
        className="w-full h-auto"
      />
    </div>
  </section>


{/* ESTE MES */}    
    <section style={{background: 'linear-gradient(to top, #3A3A3A, #1E1E1E)', color: 'white'}}>      
      <div  className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold mb-6">🎥 Proyecciones para el mes de junio</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Película 1 */}
          <div className="border border-[#0B2E2F] rounded shadow p-4">
            <img
            /* bg-white */
              src="/images/pelicula1.jpeg"
              alt="Película 1"
              className="w-full aspect-[16/9] object-cover rounded mb-4"
            />
            <h4 className="text-xl font-bold mb-2">WALL-E</h4>
            <p className="mb-4">Horario: por definir.</p>
          </div>
          {/* Película 2 */}
          <div className="border border-[#0B2E2F] rounded shadow p-4">
            <img
              src="/images/pelicula2.jpeg"
              alt="Película 2"
              className="w-full aspect-[16/9] object-cover rounded mb-4"
            />
            <h4 className="text-xl font-bold mb-2">GATO X LIEBRE</h4>
            <p className="mb-4">Horarios: por definir.</p>
          </div>
          {/* Película 3 */}
          <div className="border border-[#0B2E2F] rounded shadow p-4">
            <img
              src="/images/pelicula3.jpeg"
              alt="Película 3"
              className="w-full aspect-[16/9] object-cover rounded mb-4"
            />
            <h4 className="text-xl font-bold mb-2">LA ESTRATEGIA DEL CARACOL</h4>
            <p className="mb-4">Horarios: por definir.</p>
            {/*<button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center">
              ❤️ Me gusta
            </button>*/}
          </div>
        </div>
      </div>
    </section>


{/* Proximamente */}  
      <section style={{background: 'linear-gradient(to bottom, #3A3A3A, #4A4A4A)',color: 'white',}}>    
        <div className="py-12">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-semibold mb-6">🎬 Próximamente</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Estreno 1 */}
              <div className="border border-[#0B2E2F] rounded shadow p-4">
                <img
                  src="/images/Proximamente1.jpeg"
                  alt="Próximamente 1"
                  className="w-full aspect-[16/9] object-cover rounded mb-4"
                />
                <h4 className="text-xl font-bold mb-2">TRASH</h4>
                <p className="mb-2">Despues de encontrar una billetera en un basurero se ven envueltos en una peligrosa aventura contra la corrupción.</p>
              </div>
              {/* Estreno 2 */}
              <div className="border border-[#0B2E2F] rounded shadow p-4">
                <img
                  src="/images/Proximamente2.jpeg"
                  alt="Próximamente 2"
                  className="w-full aspect-[16/9] object-cover rounded mb-4"
                />
                <h4 className="text-xl font-bold mb-2">CUANDO EL RÍO SUENA PIEDRAS TRAE</h4>
                <p className="mb-2">El filme aborda un trágico suceso ocurrido en el río Guacimal, ubicado en Guanacaste, Costa Rica, relacionado con la conservación de la naturaleza.</p>
              </div>
              {/* Estreno 3 */}
              <div className="border border-[#0B2E2F] rounded shadow p-4">
                <img
                  src="/images/Proximamente3.jpeg"
                  alt="Próximamente 3"
                  className="w-full aspect-[16/9] object-cover rounded mb-4"
                />
                <h4 className="text-xl font-bold mb-2">YO, TAMBÍEN</h4>
                <p className="mb-2">Cuenta la historia de Daniel, un joven con síndrome de Down que se enamora de su compañera de trabajo. La película explora la inclusión, la autonomía y el amor desde una perspectiva humana y realista.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Sobre Nosotros */}  
      <section style={{ background: 'linear-gradient(to bottom, #4A4A4A, #555555)', color: 'white',}}>
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
        className="py-16"
        style={{ backgroundColor: '#0f8094', color: 'black' }}
      >
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
              <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center md:text-left">
                <span className="text-600">¿Cómo podés apoyarnos?</span>
              </h2>

              <ul className="text-lg text-gray-700 mb-6 leading-relaxed list-disc list-inside">
                <li>Apoyando en la logística de las proyecciones.</li>
                <li>Ayudando en la difusión de eventos.</li>
                <li>Guiando talleres o cineforos.</li>
                <li>Colaborando con donaciones.</li>
                <li>Claro, ¡asistiendo a las proyecciones!</li>
              </ul>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center md:text-left">
                Cada gesto cuenta. Ya sea grande o pequeño, tu apoyo nos impulsa a seguir compartiendo cine, cultura y momentos de encuentro.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* Alianzas   
<section className="w-full overflow-hidden bg-gray-100 py-6">
  <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 px-8">
    <img src="/images/sponsors/123.png" alt="Logo 1" className="h-24 object-contain flex-1 max-w-[10rem]" />
    <img src="/images/sponsors/124.png" alt="Logo 2" className="h-24 object-contain flex-1 max-w-[10rem]" />
    <img src="/images/sponsors/125.png" alt="Logo 3" className="h-24 object-contain flex-1 max-w-[10rem]" />
    <img src="/images/sponsors/126.png" alt="Logo 4" className="h-24 object-contain flex-1 max-w-[10rem]" />
    <img src="/images/sponsors/127.png" alt="Logo 5" className="h-24 object-contain flex-1 max-w-[10rem]" />
    <img src="/images/sponsors/128.png" alt="Logo 6" className="h-24 object-contain flex-1 max-w-[10rem]" />
    <img src="/images/sponsors/129.png" alt="Logo 7" className="h-24 object-contain flex-1 max-w-[10rem]" />
    <img src="/images/sponsors/130.png" alt="Logo 8" className="h-24 object-contain flex-1 max-w-[10rem]" />
    <img src="/images/sponsors/131.png" alt="Logo 9" className="h-24 object-contain flex-1 max-w-[10rem]" />
    <img src="/images/sponsors/132.png" alt="Logo 10" className="h-24 object-contain flex-1 max-w-[10rem]" />
    <img src="/images/sponsors/133.png" alt="Logo 11" className="h-24 object-contain flex-1 max-w-[10rem]" />
    <img src="/images/sponsors/134.png" alt="Logo 12" className="h-24 object-contain flex-1 max-w-[10rem]" />
    <img src="/images/sponsors/135.png" alt="Logo 13" className="h-24 object-contain flex-1 max-w-[10rem]" />
  </div>
</section>
*/}

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
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="mb-4">© 2025 Cine Entre Montañas.</p>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            Contactenos por correo {" "}
            <a href="mailto:cinecomunitario22@gmail.com" className="text-blue-600 underline hover:text-blue-800">
              cinecomunitario22@gmail.com
            </a>{" "}
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


