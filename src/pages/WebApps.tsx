import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import content from '../content.json';
import ImageLightbox from '../components/ImageLightbox';

export default function WebApps() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-32 px-6 md:px-20 min-h-screen">
      <Helmet>
        <title>Web Apps Personalizadas | L.B. Desenvolvimento Criativo</title>
        <meta name="description" content="Desenvolvimento de web apps personalizadas e económicas em Matosinhos. Soluções digitais desenhadas à medida com foco em resultados." />
        <link rel="canonical" href="https://www.lowtech.pt/web-apps" />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="font-serif text-5xl md:text-7xl mb-8">{content.webapps.title}</h1>
          <p className="text-xl md:text-2xl font-light text-zinc-400 max-w-3xl leading-relaxed">
            {content.webapps.subtitle}
          </p>
        </motion.div>

        <div className="space-y-32">
          {content.webapps.apps.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h2 className="text-3xl font-medium mb-6">{app.title}</h2>
                <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                  {app.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {app.images.map((img, imgIndex) => (
                  <div 
                    key={imgIndex} 
                    className={`rounded-xl overflow-hidden shadow-2xl border border-zinc-800 cursor-pointer ${imgIndex === 0 ? 'md:col-span-2' : ''}`}
                    onClick={() => openLightbox(app.images, imgIndex)}
                  >
                    <img 
                      src={img} 
                      alt={`${app.title} - Vista ${imgIndex + 1}`} 
                      className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ImageLightbox 
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
