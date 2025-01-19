/** @type {import('next').NextConfig} */
import {PHASE_DEVELOPMENT_SERVER} from "next/constants.js";

const nextConfig = (phase) => {
  return {
    reactStrictMode: true,
    output: "export",
    assetPrefix: '/',
    trailingSlash: phase !== PHASE_DEVELOPMENT_SERVER
  }
};

export default nextConfig;
