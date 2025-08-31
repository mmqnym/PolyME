import { Helmet } from "react-helmet";

interface StructuredDataProps {
  type: "person" | "portfolio" | "website";
}

function StructuredData({ type }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "person":
        return {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "0xmmq",
          alternateName: "mmqnym",
          url: "https://mmq.dev",
          image: "https://mmq.dev/main.png",
          sameAs: ["https://github.com/mmqnym", "https://x.com/mmqnym"],
          jobTitle: "InfoSec Software Engineer",
          worksFor: {
            "@type": "Organization",
            name: "DragonSoft Security Associates, Inc.",
          },
          knowsAbout: ["Go", "React", "TypeScript", "Node.js", "Python", "InfoSec", "Cybersecurity", "CPE", "CVE"],
          description:
            "A software engineer passionate about development and technical research. Previously focused on blockchain-related technologies, currently serving as a research and development engineer in information security, continuously advancing into inforsec software and secure software development.",
        };

      case "portfolio":
        return {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "0xmmq Portfolio",
          description: "A collection of projects showcasing 0xmmq's skills and experience.",
          author: {
            "@type": "Person",
            name: "0xmmq",
          },
          url: "https://mmq.dev/portfolio",
        };

      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "PolyME",
          description:
            "PolyME is the 0xmmq's personal website, used to show information about experience, skills, portfolio, etc.",
          url: "https://mmq.dev",
          author: {
            "@type": "Person",
            name: "0xmmq",
          },
          inLanguage: ["en", "zh-TW", "zh-CN", "ja-JP"],
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}

export default StructuredData;
