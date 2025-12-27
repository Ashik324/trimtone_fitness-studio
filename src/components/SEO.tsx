import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  type?: string;
  image?: string;
  structuredData?: object;
}

const defaultMeta = {
  siteName: "Trim & Tone Fitness Studio",
  baseUrl: "https://trimandtone.com",
  defaultTitle: "Best Gym in Tiruchirappalli",
  defaultDescription: "Transform your body at Trim & Tone Fitness Studio. Expert trainers, personalized weight loss, weight gain, functional fitness & body transformation programs in Tiruchirappalli.",
  defaultKeywords: "gym in Tiruchirappalli, fitness studio Trichy, weight loss program, weight gain, body transformation, functional fitness, personal training, Rajaram Road gym, best gym Trichy",
  defaultImage: "/hero-gym.jpg",
};

const SEO = ({
  title,
  description = defaultMeta.defaultDescription,
  keywords = defaultMeta.defaultKeywords,
  canonical,
  type = "website",
  image = defaultMeta.defaultImage,
  structuredData,
}: SEOProps) => {
  const fullTitle = title 
    ? `${title} | ${defaultMeta.siteName}` 
    : `${defaultMeta.siteName} | ${defaultMeta.defaultTitle}`;
  
  const canonicalUrl = canonical 
    ? `${defaultMeta.baseUrl}${canonical}` 
    : defaultMeta.baseUrl;
  
  const imageUrl = image.startsWith("http") ? image : `${defaultMeta.baseUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Trim & Tone Fitness Studio" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={defaultMeta.siteName} />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Geographic Tags */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Tiruchirappalli" />
      <meta name="geo.position" content="10.79;78.68" />
      <meta name="ICBM" content="10.79, 78.68" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
