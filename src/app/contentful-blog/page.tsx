import "../globals.css";

import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getBlogs() {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    console.log("Failed to fetch data");
  }

  return response.json();
}

export default async function ContentfulBlog() {
  const blogs = await getBlogs();
  console.log(blogs);
  return (
    <>
      <div className="wrapper">
        <h2 className="mt-3 font-bold text-3xl">NextJS13 + Contentful</h2>
      </div>
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
        {blogs.items.map((blog: any) => (
          <div className="item" key={blog.sys.id}>
            {blogs.includes.Asset.map((a: any) => (
              <span key={a.sys.id}>
                {blog.fields.image.sys.id == a.sys.id ? (
                  <Image
                    src={"https:" + a.fields.file.url}
                    alt=""
                    width="100"
                    height="100"
                  />
                ) : (
                  <span></span>
                )}
              </span>
            ))}
            <div>
              <h2>{blog.fields.title}</h2>
              <p>{documentToReactComponents(blog.fields.description)}</p>
              <a href="#">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
