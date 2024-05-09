import { useContext } from "react"
import { MyContext } from "../App"

export default function PostList() {
    const {posts} = useContext(MyContext)
    return (
        <>
            <h2>Here be posts!</h2>
            <hr/>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </>
    )
}