import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import content from '../content.json';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl z-10"
        >
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
            {content.hero.title_part1} <br />
            <span className="text-zinc-400 italic font-light">{content.hero.title_highlight}</span> {content.hero.title_part2}
          </h1>
          <p className="text-lg md:text-xl max-w-xl font-light leading-relaxed text-zinc-400 mb-12">
            {content.hero.subtitle}
          </p>
          
          <motion.a 
            href="#contacto"
            onClick={(e: any) => scrollTo(e, '#contacto')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 bg-zinc-50 text-zinc-950 px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors duration-300 cursor-pointer"
          >
            {content.hero.cta_text} <ArrowRight size={20} />
          </motion.a>
        </motion.div>

        {/* Decorative elements */}
        <motion.div 
          style={{ y }}
          className="absolute right-10 md:right-32 top-[15%] md:top-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full border border-zinc-800 -z-0 overflow-hidden"
        >
          <img 
            src={content.hero.image_url} 
            alt="Web Design e Estratégia Digital" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-50 hover:opacity-100"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="filosofia" className="py-32 px-6 md:px-20 bg-zinc-900 text-zinc-50 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
              {content.philosophy.title_part1}<br />
              <span className="text-zinc-400 italic font-light">{content.philosophy.title_highlight}</span>
            </h2>
            <div className="space-y-6 text-lg font-light text-zinc-400">
              <p>{content.philosophy.paragraphs[0]}</p>
              <p>{content.philosophy.paragraphs[1]}</p>
              <p className="text-zinc-300 whitespace-pre-line">
                {content.philosophy.paragraphs[2]}
              </p>
              <p>{content.philosophy.paragraphs[3]}</p>
              <p className="text-xl text-zinc-50 whitespace-pre-line">
                {content.philosophy.paragraphs[4]}
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative aspect-[3/4] rounded-t-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img 
              src={content.philosophy.image_url} 
              alt="Ambiente de trabalho focado em design estratégico e desenvolvimento web" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-zinc-900/20 mix-blend-multiply"></div>
          </motion.div>
        </div>
      </section>

      {/* Process / Services Section */}
      <section id="processo" className="py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
            <h2 className="font-serif text-5xl md:text-7xl leading-none">
              {content.process.title_part1} <br />
              <span className="italic text-zinc-400 font-light">{content.process.title_highlight}</span>
            </h2>
            <p className="max-w-sm text-lg text-zinc-400 mt-6 md:mt-0">
              {content.process.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-zinc-800">
            {content.process.steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-800 last:border-r-0 last:border-b-0 group hover:bg-zinc-900 transition-colors duration-500"
              >
                <div className="font-serif text-4xl mb-6 text-zinc-700 group-hover:text-zinc-50 transition-all">{step.num}</div>
                <h3 className="text-2xl font-medium mb-4">{step.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 md:px-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl md:text-7xl mb-20">{content.portfolio.title}</h2>
          <p className="text-zinc-400 mb-10">{content.portfolio.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.portfolio.projects.map((project, i) => (
              <a 
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-zinc-800 hover:border-zinc-500 transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-medium mb-2 group-hover:text-zinc-400">{project.title}</h3>
                  <p className="text-zinc-500">Ver projeto →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
