"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
  const images = [
    { src: "/images/Eventos/w1.jpeg", alt: "Casemcoop, Monteverde", width: 1600, height: 1067 },
    { src: "/images/Eventos/w2.jpeg", alt: "Finca Life, Cañitas", width: 1400, height: 934 },
    { src: "/images/Eventos/w3.jpeg", alt: "Auditorio Harriet Powell, Reserva Monteverde", width: 1200, height: 800 },
    { src: "/images/Eventos/w4.jpeg", alt: "ASADA Santa Elena, Los Llanos", width: 1200, height: 1500 },
    { src: "/images/Eventos/w8.jpeg", alt: "La Fortuna, San Carlos", width: 1600, height: 1067 },
    { src: "/images/Eventos/w6.jpeg", alt: "Parque Comunitario, Guacimal", width: 1400, height: 934 },
    { src: "/images/Eventos/w7.jpeg", alt: "Colagio Valle Azul, San Ramón", width: 1400, height: 934 },
    { src: "/images/Eventos/w9.jpeg", alt: "Auditorio Caburé, Monteverde", width: 1400, height: 934 },
    { src: "/images/Eventos/w10.jpeg", alt: "Centro Comunitario, San Luis", width: 1400, height: 934 },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 5 }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [emblaApi]);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      {/* Encabezado */}
      <header
        className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500 ${
          scrolled ? " backdrop-blur py-3" : "bg-transparent py-6"
        }`}
      >
        <div
          className={`container mx-auto px-4 flex items-center transition-all duration-500 ${
            scrolled ? "justify-center" : "justify-between"
          }`}
        >
          {/* Logo + Texto juntos */}
          <h1
            className={`text-3xl font-bold flex items-center gap-2 transition-all duration-500 ${
              scrolled ? "justify-center" : ""
            }`}
          >
            <img
              src="/images/Logo_SinLetras.png"
              alt="Logo Cine"
              className={`h-[1em] transition-all duration-500 ${scrolled ? "scale-110" : ""}`}
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

      {/* video intro*/}
      <section style={{ background: "linear-gradient(to top, #1E1E1E, #1E1E1E)", color: "white" }}>
        <div className="w-full h-[80vh] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/videos/intro.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section style={{ backgroundColor: "#1E1E1E", color: "white" }}>
        <div className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Sección de texto - 70% */}
              <div className="w-full md:w-[70%]">
                <h2 className="text-4xl font-extrabold mb-8 text-center md:text-left">
                  <span className="text-600">Sobre Nosotros</span>
                </h2>
                <p className="text-lg mb-6 leading-relaxed">
                  Somos un proyecto de cine comunitario que crea espacios de encuentro y diálogo en
                  Monteverde y comunidades cercanas. Más que proyecciones, buscamos conectar personas
                  y generar transformaciones a través de las historias.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Llevamos cine gratuito y de calidad a zonas rurales, promoviendo el acceso a la
                  cultura, la diversidad y el conocimiento. A través de funciones al aire libre,
                  talleres y festivales itinerantes, impulsamos la reflexión, el aprendizaje y la
                  construcción colectiva.
                </p>
                <p className="text-lg mb-6 leading-relaxed">
                  Creemos en el cine como una herramienta para fortalecer el tejido social, inspirar
                  cambios y compartir experiencias que nos unen como comunidad.
                </p>
              </div>

              {/* Sección de video*/}
              <div className="w-full md:w-[80%] flex justify-center">
                <video
                  className="rounded-xl shadow-lg max-w-full h-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/images/w9-poster.jpg" // ← Debe ser imagen (png/jpg/webp)
                >
                  <source src="/videos/w9.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* divisor */}
      <section
        style={{
          backgroundImage: 'url("/images/mv-cf.jpg")',
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <div className="py-12 bg-black/60"></div>
      </section>

      {/* ¿Cómo podés apoyarnos? */}
      <section style={{ backgroundColor: "#1E1E1E", color: "white" }} className="py-1">
        <div className="bg-[#1E1E1E]/90 py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              
              {/* Imagen izquierda - 30% */}
              <div className="w-full md:w-[30%] flex justify-center">
                <img
                  src="/images/peresozoTips.png"
                  alt="Apoyanos"
                  className="rounded-xl max-w-full h-auto"
                />
              </div>

              {/* Texto - 40% */}
              <div className="w-full md:w-[40%]">
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

              {/* Imagen derecha - 30% */}
              <div className="w-full md:w-[30%] flex justify-center">
                <img
                  src="/images/peresozoCables.png"
                  alt="Colaboración técnica"
                  className="rounded-xl max-w-full h-auto"
                />
              </div>

            </div>

            <h2 className="text-2xl mt-8 text-center mx-auto italic">
              Cada gesto cuenta. Ya sea grande o pequeño, tu apoyo nos impulsa a seguir compartiendo cine, cultura y momentos de encuentro.
            </h2>
          </div>
        </div>
      </section>


      {/* divisor */}
      <section
        style={{
          backgroundImage: 'url("/images/mv-cf3.jpg")',
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <div className="py-12 bg-black/60"></div>
      </section>
      

      {/* ======= GALERÍA ======= */}
      <section style={{ backgroundColor: "#1E1E1E", color: "white" }} className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-8 text-center">
            <span className="text-600">Eventos</span>
          </h2>

          {/* Grid 3 columnas, responsiva. El marco blanco se logra con bg + padding y gap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {images.map((img, i) => (
              <figure key={i} className="bg-white p-1 rounded-md shadow-sm overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt || `gallery-image-${i}`}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.04]"
                  loading={i < 3 ? "eager" : "lazy"}
                />
                {img.alt && (
                  <figcaption className="text-xs text-neutral-600 mt-1 px-0.5 line-clamp-2">
                    {img.alt}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>


      {/* divisor */}
      <section
        style={{
          backgroundImage: 'url("/images/mv-cf4.jpg")',
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <div className="py-12 bg-black/60"></div>
      </section>

      {/* Integrantes */}
      <section style={{ backgroundColor: '#1E1E1E', color: 'white' }} className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 text-center">Nuestro Equipo</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
            {/* Integrante 1 */}
            <div>
              <img
                src="/images/josue.png"
                alt="Josue"
                className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg border-4 border-white"
              />
              <h3 className="mt-4 text-xl font-semibold">Josué</h3>
              <p className="text-gray-300">Maestro del botón de play</p>
            </div>

            {/* Integrante 2 */}
            <div>
              <img
                src="/images/mariana.png"
                alt="Mariana"
                className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg border-4 border-white"
              />
              <h3 className="mt-4 text-xl font-semibold">Mariana</h3>
              <p className="text-gray-300">Directora del caos organizado</p>
            </div>

            {/* Integrante 3 */}
            <div>
              <img
                src="/images/NoImgUser.png"
                alt="Sofia"
                className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg border-4 border-white"
              />
              <h3 className="mt-4 text-xl font-semibold">Sofia</h3>
              <p className="text-gray-300">Reina de las palomitas</p>
            </div>

             {/* Integrante 4 */}
            <div>
              <img
                src="/images/NoImgUser.png"
                alt="Orlando"
                className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg border-4 border-white"
              />
              <h3 className="mt-4 text-xl font-semibold">Orlando</h3>
              <p className="text-gray-300">Jedi de las extensiones</p>
            </div>

             {/* Integrante 5 */}
            <div>
              <img
                src="/images/NoImgUser.png"
                alt="Laura"
                className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg border-4 border-white"
              />
              <h3 className="mt-4 text-xl font-semibold">Laura</h3>
              <p className="text-gray-300">Oráculo del clima</p>
            </div>
          </div>
        </div>
      </section>

      {/* divisor */}
      <section
        style={{
          backgroundImage: 'url("/images/mv-cf2.jpg")',
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <div className="py-12 bg-black/60"></div>
      </section>


      {/* Alianzas */}
      <section className="bg-stone-100 py-8 ">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 ">
            <span className="text-600">Alianzas</span>
          </h2>
        </div>
        <div className="flex justify-center">
          <img src="/images/alianzas.png" alt="alianzas" className="object-contain" />
        </div>
      </section>

      {/* footer */}
      <footer className="text-white py-8" style={{ backgroundColor: "#1E1E1E", color: "white" }}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="mb-4">© 2025 Cine Entre Montañas.</p>
          <p className="text-lg text-gray-400 mb-6 leading-relaxed"></p>

          <div className="flex space-x-4">
            <a href="https://www.facebook.com/cine.entre.montanas" target="_blank" rel="noopener noreferrer">
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
        </div>
      </footer>
    </main>
  );
}
