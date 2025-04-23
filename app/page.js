"use client";

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


export default function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, speed: 5 },
    [Autoplay()]
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      {/* Encabezado */}
      <header className="bg-gray-800 bg-opacity-80 text-white py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">🎬 Cine Entre Montañas</h1>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </header>



      {/* Carrusel */}
    <section className="mx-auto bg-gray-200">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="relative flex-shrink-0 w-full h-120">
            <img
              src="/images/pelicula1.jpg"
              alt="Banner 1"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="relative flex-shrink-0 w-full h-120">
            <img
              src="/images/pelicula2.jpg"
              alt="Banner 2"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="relative flex-shrink-0 w-full h-120">
            <img
              src="/images/pelicula3.jpg"
              alt="Banner 3"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="relative flex-shrink-0 w-full h-120">
            <img
              src="/images/Proximamente1.jpg"
              alt="Banner 4"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="relative flex-shrink-0 w-full h-120">
            <img
              src="/images/Proximamente2.jpg"
              alt="Banner 5"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Noticias */}
    <section className="flex justify-center">
      <div className="w-90 h-90 container mx-auto absolute top-40 rounded bg-[rgba(31,41,55,0)]">
        {/*<h2 className="text-4xl text-white font-bold mb-4">🎬 ¡Cine gratuito para todos!</h2>
        <p className="text-white mb-6">
          Disfruta de proyecciones de cine nacional e internacional sin costo alguno, organizadas por comunidades, universidades y centros culturales en diversos puntos del país.​  
          Estos eventos incluyen funciones al aire libre, talleres y actividades culturales, fomentando el acceso al arte cinematográfico para todos.
        </p>*/}
        <img
          src="/images/Logo.png"
          alt="Logo de Cine entre montañas"
        />
      </div>
    </section>

    <section className="container mx-auto px-4 py-12">
      <h3 className="text-2xl font-semibold mb-6">🎥 Proyecciones para el mes de </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Película 1 */}
        <div className="bg-white rounded shadow p-4">
          <img
            src="/images/pelicula1.jpg"
            alt="Película 1"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h4 className="text-xl font-bold mb-2">Título de la Película 1</h4>
          <p className="mb-4">Horario: 18:00</p>
        </div>
        {/* Película 2 */}
        <div className="bg-white rounded shadow p-4">
          <img
            src="/images/pelicula2.jpg"
            alt="Película 2"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h4 className="text-xl font-bold mb-2">Título de la Película 2</h4>
          <p className="mb-4">Horarios: 15:00, 18:00, 21:00</p>
        </div>
        {/* Película 3 */}
        <div className="bg-white rounded shadow p-4">
          <img
            src="/images/pelicula3.jpg"
            alt="Película 3"
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h4 className="text-xl font-bold mb-2">Título de la Película 3</h4>
          <p className="mb-4">Horarios: 16:00, 19:00, 22:00</p>
          {/*<button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center">
            ❤️ Me gusta
          </button>*/}
        </div>
      </div>
    </section>

      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-6">🎬 Próximamente</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Estreno 1 */}
            <div className="bg-white rounded shadow p-4">
              <img
                src="/images/Proximamente1.jpg"
                alt="Próximamente 1"
                className="w-full h-64 object-cover rounded mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Título del Estreno 1</h4>
              <p className="mb-2">Fecha de proyeccion: 25 de abril</p>
            </div>
            {/* Estreno 2 */}
            <div className="bg-white rounded shadow p-4">
              <img
                src="/images/Proximamente2.jpg"
                alt="Próximamente 2"
                className="w-full h-64 object-cover rounded mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Título del Estreno 2</h4>
              <p className="mb-2">Fecha de proyeccion: 2 de mayo</p>
            </div>
            {/* Estreno 3 */}
            <div className="bg-white rounded shadow p-4">
              <img
                src="/images/Proximamente3.jpg"
                alt="Próximamente 3"
                className="w-full h-64 object-cover rounded mb-4"
              />
              <h4 className="text-xl font-bold mb-2">Título del Estreno 3</h4>
              <p className="mb-2">Fecha de proyeccion: 9 de mayo</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
            🎬 <span className="text-600">Sobre Nosotros</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Somos un colectivo de cineastas, activistas culturales y ciudadanos apasionados por el cine como herramienta de <span className="font-semibold text-indigo-600">transformación social</span>. Nuestro trabajo va más allá de las pantallas, buscamos crear conexiones entre las personas y las historias que transforman.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Nuestro objetivo es llevar el cine gratuito y de calidad a <span className="font-semibold text-indigo-600">comunidades de todo Costa Rica</span>, promoviendo el acceso a historias que reflejan nuestra riqueza cultural, diversidad y sueños compartidos.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            A través de <span className="font-semibold text-indigo-600">proyecciones al aire libre, talleres y festivales itinerantes</span>, buscamos crear espacios de encuentro, reflexión y aprendizaje. El cine se convierte en un medio para el diálogo y la construcción colectiva.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Creemos en el poder del cine para conectar a las personas, inspirar cambios y fortalecer el tejido social. Cada <span className="font-semibold text-indigo-600">estreno</span> es una invitación a soñar, cuestionar y compartir experiencias que nos unen como comunidad.
          </p>
        </div>
      </section>


      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2025 Cine Entre Montañas. Todos los derechos reservados.</p>
          <nav className="space-x-6">
            <a href="#" className="hover:underline">Términos y Condiciones</a>
            <a href="#" className="hover:underline">Política de Privacidad</a>
            <a href="#" className="hover:underline">Contacto</a>
          </nav>
        </div>
      </footer>
    </main>
    )
  }


