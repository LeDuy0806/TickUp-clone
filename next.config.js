/** @type {import('next').NextConfig} */
const WpAutoImportPlugin = require("unplugin-auto-import/webpack").default;
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      WpAutoImportPlugin({
        imports: [
          "react",
          {
            "next/navigation": [
              "useRouter",
              "useSearchParams",
              "useParams",
              "usePathname",
              "redirect",
              "permanentRedirect",
            ],
            "next/link": [["default", "Link"]],
            "next/image": [["default", "Image"]],
            "next/script": [["default", "Script"]],
          },
        ],
        dirs: ["./src/shared/**"],
      }),
    );
    return config;
  },
};

module.exports = nextConfig;
