export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  thumbnail?: string;
  summary: string;
  body: string;
}

const modules = import.meta.glob('../content/blog/*.json', { eager: true });

export const getBlogPosts = (): BlogPost[] => {
  return Object.entries(modules).map(([path, module]: [string, any]) => {
    const slug = path.split('/').pop()?.replace('.json', '') || '';
    return {
      slug,
      ...module.default,
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getBlogPost = (slug: string): BlogPost | undefined => {
  const posts = getBlogPosts();
  return posts.find(p => p.slug === slug);
};
