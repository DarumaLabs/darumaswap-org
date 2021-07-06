const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, reporter, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        fields {
                            relativePath
                            slug
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query')
    }

    result.data.allMdx.edges.forEach(({ node }) => {
        const slug = node.fields.slug
        let layout = 'index'

        if (slug.includes('/docs/')) {
            layout = 'docs'
        } else if (slug.includes('/blog/')) {
            layout = 'blogPost'
        }

        createPage({
            path: node.fields.slug,
            component: require.resolve(`./src/layouts/${layout}.tsx`),
            context: {
                relativePath: node.fields.relativePath
            }
        })
    })
}

exports.onCreateNode = function({ node, actions, getNode, getNodesByType }) {
    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode, basePath: 'content' })

        if (slug) {
            actions.createNodeField({
                name: 'slug',
                node,
                value: `${slug.replace(/\d+-/g, ``)}`
            })
        }

        const absolutePath = node.fileAbsolutePath
        const relativePathStart = absolutePath.indexOf("src/")
        const relativePath = absolutePath.substring(relativePathStart)

        if (relativePath) {
            actions.createNodeField({
                name: 'relativePath',
                node,
                value: relativePath
            })
        }
    }
};
