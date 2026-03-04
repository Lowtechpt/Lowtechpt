import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Markdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';
import { getBlogPost } from '../utils/blog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-4xl mb-4">Artigo não encontrado</h1>
          <Link to="/blog" className="text-zinc-400 hover:text-zinc-50 underline">Voltar ao Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-20 px-6 md:px-20 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-zinc-500 hover:text-zinc-50 transition-colors mb-12">
          <ArrowLeft size={16} /> Voltar ao Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm text-zinc-500 mb-6 font-mono">
            {new Date(post.date).toLocaleDateString('pt-PT', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
            {post.title}
          </h1>
          
          {post.thumbnail && (
            <div className="aspect-video rounded-3xl overflow-hidden mb-12">
              <img 
                src={post.thumbnail} 
                alt={post.title} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          <div className="prose prose-invert prose-zinc max-w-none">
            <Markdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-4xl font-serif mb-6 mt-12 text-zinc-50" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-3xl font-serif mb-4 mt-10 text-zinc-50" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-2xl font-serif mb-4 mt-8 text-zinc-50" {...props} />,
                p: ({node, ...props}) => <p className="text-lg text-zinc-400 font-light leading-relaxed mb-6" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc list-inside text-zinc-400 mb-6 space-y-2" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal list-inside text-zinc-400 mb-6 space-y-2" {...props} />,
                a: ({node, ...props}) => <a className="text-zinc-50 underline underline-offset-4 hover:text-zinc-300" {...props} />,
                strong: ({node, ...props}) => <strong className="font-medium text-zinc-200" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-2 border-zinc-700 pl-6 italic text-zinc-300 my-8" {...props} />,
              }}
            >
              {post.body}
            </Markdown>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
