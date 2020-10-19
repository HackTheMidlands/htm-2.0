// const Promise = require('bluebird');
// const path = require('path');

// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions;
//
//     return new Promise((resolve, reject) => {
//         const blogPost = path.resolve('./src/templates/blog-post.js');
//         const hackathonTemplate = path.resolve('./src/templates/hackathon/hackathon.jsx');
//         resolve(
//             graphql(
//                 `
//           {
//             allContentfulBlogPost {
//               edges {
//                 node {
//                   title
//                   slug
//                 }
//               }
//             }
//           }
//           `,
//             ).then((result) => {
//                 if (result.errors) {
//                     console.log(result.errors);
//                     reject(result.errors);
//                 }
//
//                 const posts = result.data.allContentfulBlogPost.edges;
//                 posts.forEach((post, index) => {
//                     createPage({
//                         path: `/blog/${post.node.slug}/`,
//                         components: blogPost,
//                         context: {
//                             slug: post.node.slug,
//                         },
//                     });
//                 });
//
//                 createPage({
//                     path: '/events/htm-5',
//                     components: hackathonTemplate,
//                 });
//             }),
//         );
//     });
// };

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === 'build-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /masonry-layout/,
                        use: loaders.null(),
                    },
                ],
            },
        });
    }
};
