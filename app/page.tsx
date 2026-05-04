"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const images = ["/foto1.jpg", "/foto2.jpg", "/foto3.jpg", "/foto4.jpg"];

  return (
    <main className="bg-black text-white">


      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 z-50 bg-black bg-opacity-30 backdrop-blur-md">
        <a href="#contacto" className="text-lg font-bold hover:opacity-70">
          Contacto
        </a>

        <div className="flex gap-6 text-sm">
          <a href="#inicio" className="hover:opacity-70">Inicio</a>
          <a href="#trabajo" className="hover:opacity-70">Trabajo</a>
          <a href="#sobre" className="hover:opacity-70">Sobre mí</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" className="h-screen relative flex items-center justify-center overflow-hidden">

  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source
      src="https://res.cloudinary.com/darvpownb/video/upload/Baja_Climbing.mp4"
      type="video/mp4"
    />
  </video>

  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-7xl font-bold z-10"
  >
    Daniela Nava
  </motion.h1>

</section>
      {/* GALERÍA */}
      {images.map((img, i) => (
        <section
          key={i}
          id={i === 0 ? "trabajo" : ""}
          className="h-screen relative overflow-hidden"
        >

          {/* VIDEO SOLO PRIMERA SECCIÓN */}
          
          {/* IMÁGENES PARA LAS DEMÁS SECCIONES */}
          {i !== 0 && (
            <motion.img
              src={img}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
            />
          )}

          {/* TEXTO ENCIMA */}
          <motion.div
            className="absolute bottom-10 left-10 z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl">La Baja Climbing</h2>
          </motion.div>

        </section>
      ))}

      {/* SOBRE MÍ */}
      <section id="sobre" className="p-16 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl mb-6">Sobre mí</h2>
        <p className="text-gray-300">
          Aquí puedes escribir quién eres, qué haces y tu estilo creativo.
        </p>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="p-16 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl mb-6">Contacto</h2>

        <p className="mb-4 text-gray-300">
          <a
            href="mailto:tuemail@gmail.com"
            className="hover:text-white"
          >
            📧 daniela21nava@gmail.com
          </a>
        </p>

        <div className="flex justify-center gap-8 text-gray-400 text-lg">
          <a
            href="https://www.instagram.com/danielaa_nava"
            target="_blank"
            className="hover:text-white"
          >
            Instagram
          </a>

          <a
            href="https://youtube.com/@tuusuario"
            target="_blank"
            className="hover:text-white"
          >
            YouTube
          </a>
        </div>
      </section>

    </main>
  );
}