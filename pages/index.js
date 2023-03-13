import Link from "next/link";
export default function Home(props) {
  return (
    <>
      <div>
        {props.posts.map(post => {
          return(
            <div key={post.id}>
              <Link href={`/posts/${post.id}`}>
                {post.name}
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export async function getStaticProps() {
    const req = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await req.json();

  return {
    props: {
      posts:data,
    }
  }
}