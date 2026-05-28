import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants.js";

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
};

const nextConfigFunction = async (phase: string) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = (await import("@ducanh2912/next-pwa")).default({
      dest: "public",
      register: true,
    });
    return withPWA(nextConfig);
  }
  return nextConfig;
};

export default nextConfigFunction;
