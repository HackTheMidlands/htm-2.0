import Layout from '../components/layout/layout';
import React from 'react';

class BlogPostTemplate extends React.Component {
    render() {
        // const post = get(this.props, 'data.contentfulBlogPost');
        // const siteTitle = get(this.props, 'data.site.siteMetadata.title');

        return (
            <Layout location={this.props.location}>
                <h1>Blog Post</h1>
            </Layout>
        );
    }
}

export default BlogPostTemplate;

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       publishDate(formatString: "MMMM Do, YYYY")
//       heroImage {
//         fluid(maxWidth: 1180, background: "rgb:000000") {
//           ...GatsbyContentfulFluid_tracedSVG
//         }
//       }
//       body {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `
