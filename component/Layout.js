import Navbar from "./Navbar"

function Posts(props) {
    return (
        <>
            <Navbar />
            <div>Hello from Layout</div>
            {props.children}
            <footer>Footer</footer>
        </>
    )
}

export default Posts