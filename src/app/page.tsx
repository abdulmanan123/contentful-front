import "./globals.css";

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

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <div className="flex">
      {blogs.items.map((item: any) => (
        <div className="quote">
          <p>“{item.fields.description.content[0].content[0].value}”</p>
          <span>- {item.fields.title}</span>
        </div>
      ))}
    </div>
  );
}
