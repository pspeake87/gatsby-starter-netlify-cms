const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.speakesoftware.co',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    siteUrl,
    title: 'Speake Software',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-22796526-3',
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.speakesoftware.co`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: isNetlifyProduction
        ? { policy: [{ userAgent: '*' }] }
        : {
          policy: [{ userAgent: '*', disallow: ['/'] }],
          sitemap: null,
          host: null
        }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/some-other-sitemap.xml`,
        exclude: ["/services/*", `/blog/*`],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
 
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
}
