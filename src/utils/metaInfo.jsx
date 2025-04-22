export const getMetaInfo = (page) => {
  return {
    title: `${page} | Royal Dart Blaze - Best Solar Solutions`,
    description:
      "Official site for Shiva Sai Solar System and Royal Dart Blaze. Discover top-tier solar technology and energy solutions for homes and businesses.",
    keywords:
      "Shiva Sai Solar System, Royal Dart Blaze, solar panels, solar systems, renewable energy",
    openGraph: {
      title: "Shiva Sai Solar System | Royal Dart Blaze",
      description:
        "Leading provider of solar systems and energy solutions. Explore Royal Dart Blaze today!",
      url: "https://royaldartblaze.com",
      siteName: "Shiva Sai Solar System",
      images: [
        {
          url: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-img1.435fe357.png&w=3840&q=75", // good image for sharing
          width: 1200,
          height: 630
        }
      ],
      locale: "en_US",
      type: "website"
    }
  };
};
