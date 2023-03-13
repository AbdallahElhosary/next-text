export default function Id(props) {
  return (
      <div>
          <p>{props.post.name}</p>
          <p>{props.post.username}</p>
          <p>{props.post.website}</p>


    </div>
  )
}

export async function getServerSideProps(context) {
    const req = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
  const data = await req.json();

  return {
    props: {
      post:data,
    }
  }
}