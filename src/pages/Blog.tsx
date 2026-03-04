import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../utils/blog';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <div className="pt-32 pb-20 px-6 md:px-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="font-serif text-5xl md:text-7xl leading-none mb-6">
            Boas <span className="italic text-zinc-400 font-light">Práticas</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl font-light">
            Artigos, dicas e reflexões sobre design, estratégia digital e como fazer o seu negócio crescer na internet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="group flex flex-col h-full bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-600 transition-colors">
                {post.thumbnail && (
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.thumbnail} 
                      alt={post.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-sm text-zinc-500 mb-4 font-mono">
                    {new Date(post.date).toLocaleDateString('pt-PT', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <h2 className="text-2xl font-serif mb-4 group-hover:text-zinc-300 transition-colors">{post.title}</h2>
                  <p className="text-zinc-400 font-light line-clamp-3 mb-8 flex-grow">{post.summary}</p>
                  <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-zinc-50 group-hover:text-zinc-300 transition-colors mt-auto">
                    Ler Artigo <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
