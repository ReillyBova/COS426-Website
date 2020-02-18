const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// Loader for graphics files
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.(glsl|vs|fs|vert|frag)$/,
                    exclude: /node_modules/,
                    use: ['raw-loader'],
                },
            ],
        },
    });
};

// Create slugs for pages from assignment markdown
exports.onCreateNode = ({ node, getNode, actions }) => {
    if (node.internal.type === `MarkdownRemark`) {
        const fileNode = getNode(node.parent);
        if (fileNode.relativeDirectory === 'Assignments') {
            const { createNodeField } = actions;
            const slug = createFilePath({
                node,
                getNode,
                basePath: `Assignments`,
            });
            createNodeField({
                node,
                name: `slug`,
                value: `assignments${slug}`,
            });
            createNodeField({
                node,
                name: `type`,
                value: `assignment`,
            });
        }
    }
};

// Create pages from assignment markdown
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // The graphql function call returns a Promise
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            available
                        }
                        fields {
                            slug
                            type
                        }
                    }
                }
            }
        }
    `);

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.fields && node.fields.type === 'assignment') {
            if (node.frontmatter.available) {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(
                        `./src/templates/AssignmentTemplate.jsx`
                    ),
                    context: {
                        slug: node.fields.slug,
                    },
                });
            }
        }
    });
};
