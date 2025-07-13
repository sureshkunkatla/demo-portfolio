import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      <title>Suresh Kunkatla | Frontend Developer Portfolio</title>
      <meta
        name="description"
        content="Portfolio of Suresh Kunkatla, a frontend developer specializing in React, React Native, and modern UI development."
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Suresh Kunkatla",
            "url": "https://sureshkunkatlaportfolio.netlify.app",
            "jobTitle": "Frontend Developer",
            "sameAs": [
              "https://github.com/sureshkunkatla",
              "https://www.linkedin.com/in/sureshkunkatla"
            ]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;
