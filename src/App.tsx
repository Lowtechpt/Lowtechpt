import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import content from './content.json';

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const [projectType, setProjectType] = useState('Website');

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-zinc-100 selection:text-zinc-900 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 text-zinc-50 py-5 px-6 md:px-10 flex justify-between items-center">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif text-xl tracking-wide cursor-pointer"
        >
          L.B.
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
          <a href="#filosofia" onClick={(e) => scrollTo(e, '#filosofia')} className="hover:text-zinc-400 transition-colors">Filosofia</a>
          <a href="#processo" onClick={(e) => scrollTo(e, '#processo')} className="hover:text-zinc-400 transition-colors">Processo</a>
          <a href="#contacto" onClick={(e) => scrollTo(e, '#contacto')} className="hover:text-zinc-400 transition-colors">Contacto</a>
        </div>
      </nav>

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
          className="absolute right-10 md:right-32 top-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full border border-zinc-800 -z-0"
        />
        <div className="absolute left-10 bottom-20 flex items-center gap-4 text-sm font-medium tracking-widest uppercase text-zinc-500 rotate-90 origin-left">
          <span className="w-12 h-[1px] bg-zinc-500"></span>
          Role para descobrir
        </div>
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
              alt="Design minimalista" 
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
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
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

      {/* Footer / CTA */}
      <footer id="contacto" className="bg-zinc-900 text-zinc-50 py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
              {content.contact.title_part1} <br />
              <span className="italic text-zinc-400 font-light">{content.contact.title_highlight}</span>
            </h2>
            <p className="text-xl font-light text-zinc-400 mb-12 max-w-md">
              {content.contact.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-zinc-950 p-8 md:p-12 rounded-3xl border border-zinc-800"
          >
            <form 
              action={`https://formsubmit.co/${content.contact.email_destination}`} 
              method="POST" 
              className="flex flex-col gap-8"
            >
              {/* Configurações do FormSubmit */}
              <input type="hidden" name="_subject" value="Novo contacto pelo site!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium tracking-widest uppercase text-zinc-400">Nome</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  required 
                  className="bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-zinc-50 transition-colors placeholder:text-zinc-600"
                  placeholder="Como o devemos tratar?"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium tracking-widest uppercase text-zinc-400">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    required 
                    className="bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-zinc-50 transition-colors placeholder:text-zinc-600"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium tracking-widest uppercase text-zinc-400">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    className="bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-zinc-50 transition-colors placeholder:text-zinc-600"
                    placeholder="O seu número de contacto"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-sm font-medium tracking-widest uppercase text-zinc-400">O que procura?</label>
                <input type="hidden" name="project_type" value={projectType} />
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setProjectType('Website')}
                    className={`py-4 px-6 rounded-xl border text-center transition-all duration-300 ${
                      projectType === 'Website'
                        ? 'border-zinc-50 bg-zinc-50 text-zinc-950 font-medium'
                        : 'border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
                    }`}
                  >
                    Website
                  </button>
                  <button
                    type="button"
                    onClick={() => setProjectType('Web App')}
                    className={`py-4 px-6 rounded-xl border text-center transition-all duration-300 ${
                      projectType === 'Web App'
                        ? 'border-zinc-50 bg-zinc-50 text-zinc-950 font-medium'
                        : 'border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200'
                    }`}
                  >
                    Web App
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium tracking-widest uppercase text-zinc-400">Detalhes do Projeto</label>
                <textarea 
                  id="message"
                  name="message" 
                  required 
                  rows={4}
                  className="bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-zinc-50 transition-colors placeholder:text-zinc-600 resize-none"
                  placeholder="Conte um pouco sobre a sua ideia..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="self-start mt-4 inline-flex items-center gap-3 bg-zinc-50 text-zinc-950 px-10 py-4 rounded-full text-lg font-medium hover:bg-zinc-200 transition-colors duration-300"
              >
                Enviar Mensagem <ArrowRight size={20} />
              </button>
            </form>
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-zinc-500">
          <p>© {new Date().getFullYear()} {content.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
