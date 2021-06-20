const menu = require('./src/utils/menu');

require("dotenv").config();

module.exports = {
    siteMetadata: {
        title: `Darumaswap`,
        description: `The new generation of decentralised swapping protocol`,
        author: `@NegativeHoro`,
        menulinks: menu,
        siteUrl: `https://darumaswap.org`,
        repository: `https://github.com/DarumaLabs/darumaswap-org`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: process.env.AWS_S3_BUCKET || 'NOT_SPECIFIED',
                protocol: 'https',
                hostname: 'darumaswap.org',
                acl: null
            }
        }, {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://darumaswap.org`
            }
        }, {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        }, {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/pages/blog`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-remark-images`,
        `gatsby-background-image`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/
                }
            }
        }, {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                defaultLayouts: {
                    blog: require.resolve(`./src/layouts/blogPost.tsx`),
                },
                gatsbyRemarkPlugins: [
                    `gatsby-remark-autolink-headers`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
                plugins: [ { resolve: `gatsby-remark-images` } ],
            },
        },
        'gatsby-remark-reading-time',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/daruma-icon.png`, // This path is relative to the root of the site.
            },
        },
    ],
}
