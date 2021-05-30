const menu = require('./src/utils/menu');

require("dotenv").config();

module.exports = {
    siteMetadata: {
        title: `Darumascan`,
        description: `Live stats on your wallet`,
        author: `@Darumascan`,
        menulinks: menu,
        siteUrl: `https://darumascan.org`,
        repository: `https://github.com/Darumascan/darumascan-website`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: process.env.AWS_S3_BUCKET || 'NOT_SPECIFIED',
                protocol: 'https',
                hostname: 'uniswap.org',
                acl: null
            }
        }, {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://darumascan.org`
            }
        }, {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/
                }
            }
        }, {
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
