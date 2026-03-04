import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import content from '../content.json';

export default function Footer() {
  const [projectType, setProjectType] = useState('Website');

  return (
    <footer id="contacto" className="bg-zinc-900 text-zinc-50 py-32 px-6 md:px-20 mt-auto">
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
        <p className="text-zinc-600 text-xs md:text-sm text-center md:text-right max-w-md">{content.footer.branding_text}</p>
      </div>
    </footer>
  );
}
