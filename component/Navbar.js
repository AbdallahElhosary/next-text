import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href="/" >Home</Link>
            <Link href="/about" >about</Link>
            <Link href="/posts" >posts</Link>
            <Link href="/dia" >dia</Link>

      </nav>
  )
}
