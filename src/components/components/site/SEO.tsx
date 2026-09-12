import { Head } from "vite-react-ssg";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_URL = "https://www.restaurantelastejas.es";

export const SEO = ({ title, description, path = "/" }: SEOProps) => {
  const canonical = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <link rel="canonical" href={canonical} />
    </Head>
  );
};
