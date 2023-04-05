import "../globals.css";

import Image from "next/image";

async function getBlogs() {
  const response = await fetch(`${process.env.API_URL}blogs`, {
    cache: "no-store",
  });

  if (!response.ok) {
    console.log("Failed to fetch data");
  }

  return response.json();
}

export default async function Blog() {
  const blogs = await getBlogs();
  console.log(blogs);
  return (
    <>
      <div className="wrapper">
        <h2 className="mt-3 font-bold text-3xl">NextJS13 + Neon</h2>
      </div>
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
        {blogs.map((blog: any) => (
          <div className="item" key={blog.id}>
            <Image
              src={`https://picsum.photos/id/${blog.id}/400/300`}
              width={400}
              height={300}
              alt=""
            />

            <div>
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <a href="#">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
