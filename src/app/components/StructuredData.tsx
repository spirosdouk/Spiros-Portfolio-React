export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Spiros Doukeris",
    jobTitle: "Frontend Developer",
    description:
      "Experienced Frontend Developer specializing in React, Next.js, and TypeScript",
    url: "https://spiros-portfolio.vercel.app",
    image: "https://spiros-portfolio.vercel.app/images/profile.png",
    sameAs: [
      "https://github.com/spirosdouk",
      "https://linkedin.com/in/spyros-doukeris-856bb7288",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "University of Crete",
      department: "Computer Science",
    },
    worksFor: {
      "@type": "Organization",
      name: "Logicea",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Frontend Development",
      "Web Development",
      "JavaScript",
      "React Native",
      "Angular",
      "Unity",
      "C#",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Frontend Developer",
      occupationLocation: {
        "@type": "Country",
        name: "Greece",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
