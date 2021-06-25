const path = require('path')
const slash = require('slash')
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions
    const path = page.path.replace(/\d+-/g, ``)

    if ( page.path !== path ) {
        deletePage(page)
        createPage({ ...page, path })
    }
}

function getDefaultRoots() {
  const cwd = process.cwd()
  const rt = []
  rt.push(path.posix.join(slash(cwd), '/src/content'))
  rt.push(path.posix.join(slash(cwd), '/src/pages'))
  return rt
}

function ft_createFilePath({ fileNode, trailingSlash = true, roots }) {
  // Find the File node
  if (!fileNode) return undefined

  for (
    var _iterator2 = roots,
      _isArray2 = Array.isArray(_iterator2),
      _i2 = 0,
      _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();
    ;

  ) {
    var _ref2

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break
      _ref2 = _iterator2[_i2++]
    } else {
      _i2 = _iterator2.next()
      if (_i2.done) break
      _ref2 = _i2.value
    }

    const basePath = _ref2
    const relativePath = path.posix.relative(slash(basePath), slash(fileNode.absolutePath))

    if (relativePath.startsWith('..')) {
      continue
    }

    const _path$parse = path.parse(relativePath),
      _path$parse$dir = _path$parse.dir,
      dir = _path$parse$dir === void 0 ? `` : _path$parse$dir,
      name = _path$parse.name

    const parsedName = name === `index` ? `` : name
    return path.posix.join(`/`, dir, parsedName, trailingSlash ? `/` : ``)
  }

  return undefined
}

function findFileNode({ node, getNode }) {
  // Find the file node.
  let fileNode = node
  let whileCount = 0

  while (
    fileNode.internal.type !== `File` &&
    fileNode.parent &&
    getNode(fileNode.parent) !== undefined &&
    whileCount < 101
  ) {
    fileNode = getNode(fileNode.parent)
    whileCount += 1

    if (whileCount > 100) {
      console.log(`It looks like you have a node that's set its parent as itself`, fileNode)
    }
  }

  return fileNode
}

exports.onCreateNode = function({ node, actions, getNode, getNodesByType }) {
    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode })
        const collection = getNode(node.parent).sourceInstanceName;

        if (slug) {
            actions.createNodeField({
                name: 'slug',
                node,
                value: `/${collection}${slug.replace(/\d+-/g, ``)}`
            })
        }
    }
};
