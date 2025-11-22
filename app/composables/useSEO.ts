type OgType = 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_status' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';

export const useSEO = (options: {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: OgType;
  keywords?: string[];
  author?: string;
  structuredData?: any;
}) => {
  const config = useRuntimeConfig();
  const route = useRoute();

  const {
    title,
    description,
    image = '/og-image.jpg',
    url,
    type = 'website',
    keywords = [],
    author = 'Hang Senghong',
    structuredData,
  } = options;

  const siteUrl = url || `${config.public.siteUrl}${route.path}`;
  const fullTitle = title === 'Home' ? 'Hang Senghong - Full Stack Developer' : `${title} | Hang Senghong - Full Stack Developer`;
  const fullImageUrl = image.startsWith('http') ? image : `${config.public.siteUrl}${image}`;

  // Set page title
  useHead({
    title: fullTitle,
    link: [
      { rel: 'canonical', href: siteUrl },
    ],
  });

  // Set meta tags using useSeoMeta
  useSeoMeta({
    title: fullTitle,
    description: description,
    author: author,
    keywords: keywords.join(', '),

    // Open Graph
    ogType: type as OgType,
    ogUrl: siteUrl,
    ogTitle: fullTitle,
    ogDescription: description,
    ogImage: fullImageUrl,
    ogSiteName: 'Hang Senghong Portfolio',

    // Twitter
    twitterCard: 'summary_large_image',
    twitterSite: '@Hongprogrammer',
    twitterCreator: '@Hongprogrammer',
    twitterTitle: fullTitle,
    twitterDescription: description,
    twitterImage: fullImageUrl,

    // Additional
    robots: 'index, follow',
  });

  // Add structured data if provided
  if (structuredData) {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(structuredData),
        },
      ],
    });
  }
};
