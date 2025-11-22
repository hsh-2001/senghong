export const useSEO = () => {
  const config = useRuntimeConfig();
  const route = useRoute();

  const setPageSEO = (options: {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: string;
    keywords?: string[];
    author?: string;
  }) => {
    const {
      title,
      description,
      image = '/og-image.jpg',
      url,
      type = 'website',
      keywords = [],
      author = 'Hang Senghong',
    } = options;

    const siteUrl = url || `${config.public.siteUrl || 'https://senghong.dev'}${route.path}`;
    const fullTitle = `${title} | Hang Senghong - Full Stack Developer`;

    useHead({
      title: fullTitle,
      meta: [
        // Primary Meta Tags
        { name: 'title', content: fullTitle },
        { name: 'description', content: description },
        { name: 'author', content: author },
        { name: 'keywords', content: keywords.join(', ') },

        // Open Graph / Facebook
        { property: 'og:type', content: type },
        { property: 'og:url', content: siteUrl },
        { property: 'og:title', content: fullTitle },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:site_name', content: 'Hang Senghong Portfolio' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: siteUrl },
        { name: 'twitter:title', content: fullTitle },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
        { name: 'twitter:creator', content: '@Hongprogrammer' },

        // Additional SEO
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'English' },
        { name: 'revisit-after', content: '7 days' },
        { httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
      link: [
        { rel: 'canonical', href: siteUrl },
      ],
    });
  };

  const setStructuredData = (data: any) => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify(data),
        },
      ],
    });
  };

  return {
    setPageSEO,
    setStructuredData,
  };
};
