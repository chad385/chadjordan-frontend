import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  // Articles on retired positioning (platform risk, ownership, SaaS pricing),
  // taken down 2026-10-27. Permanent redirects keep search visitors and old
  // internal links off a dead end.
  async redirects() {
    return [
      "platform-risk-audit-squarespace-framer-gohighlevel-founders",
      "brand-stack-platform-risk-audit",
      "website-ownership-source-code-competitive-moat",
      "deplatforming-business-risk-founders-guide",
      "saas-pricing-surge-small-business-brand-stack",
    ].map((slug) => ({ source: `/blog/${slug}`, destination: "/blog", permanent: true }));
  },
};

export default nextConfig;
