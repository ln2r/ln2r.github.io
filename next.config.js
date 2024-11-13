// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: false,
  },

  /**
   * mdx-editor stuff
   */
  transpilePackages: ['@mdxeditor/editor'],
  webpack: (config) => {
    // this will override the experiments
    config.experiments = {...config.experiments, topLevelAwait: true}
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    return config
  },
};

module.exports = nextConfig;