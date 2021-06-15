const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions
    const path = page.path.replace(/\d+-/g, ``)

    if ( page.path !== path ) {
        deletePage(page)
        createPage({ ...page, path })
    }
}

exports.onCreateNode = function({ node, actions, getNode }) {
    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })

        if (value) {
            actions.createNodeField({
                name: 'slug',
                node,
                value: `blog${value.replace(/\d+-/g, ``)}`
            })
        }
    }
};
