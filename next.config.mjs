import { createJiti } from "jiti";
import withBundleAnalyzer from "@next/bundle-analyzer";
import createNextIntlPlugin from "next-intl/plugin";

const jiti = createJiti(import.meta.url);
await jiti.import("./src/libs/env.ts");

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withNextIntl = createNextIntlPlugin("./src/libs/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default bundleAnalyzer(withNextIntl(nextConfig));
