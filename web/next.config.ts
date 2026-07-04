import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  async redirects() {
    // Ported from the export's _redirects (Netlify-style 301s).
    return [
      { source: "/project/sevenloop", destination: "/clients/sevenloop", permanent: true },
      {
        source: "/project/sevenloop-explainer-film",
        destination: "/clients/sevenloop",
        permanent: true,
      },
      { source: "/project/aavenir", destination: "/clients/aavenir", permanent: true },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
