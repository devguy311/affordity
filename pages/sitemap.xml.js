import { getBlogList } from '../component/blog/util'

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://wwww.affordify.io/</loc>
     </url>
     <url>
       <loc>https://www.affordify.io/fr</loc>
     </url>
     ${posts
      .map((post) => {
        return `
            <url>
                <loc>${`https://www.affordify.io/blog/${post.en.blogId}`}</loc>
                <changefreq>monthly</changefreq>
                <priority>0.7</priority>
            </url>
            <url>
                <loc>${`https://www.affordify.io/fr/blog/${post.fr.blogId}`}</loc>
                <changefreq>monthly</changefreq>
                <priority>0.7</priority>
            </url>
     `;
      })
      .join('')}
   </urlset>  
 `;
}

function SiteMap() { }

export async function getServerSideProps({ res }) {
  const posts = await getBlogList();

  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;