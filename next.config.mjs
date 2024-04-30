import { fileURLToPath } from "node:url";
import createJiti from "jiti";
import withBundleAnalyzer from "@next/bundle-analyzer";

const jiti = createJiti(fileURLToPath(import.meta.url));
jiti("./config/env");

/** @type {import('next').NextConfig} */
const options = {};

const nextConfig =
  process.env.ANALYZE === "true" ? withBundleAnalyzer()(options) : options;

export default nextConfig;
