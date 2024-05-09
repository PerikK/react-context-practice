import { useState, createContext } from 'react'
import './App.css'
import CreatePostForm from './components/CreatePostForm'
import PostList from './components/PostList'

export const MyContext = createContext()

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Hello, world :)' },
    { id: 2, title: 'Goodbye, world :('}
  ])

  return (
    <MyContext.Provider value = {{posts, setPosts}}>
      <header>
        <CreatePostForm posts={posts} setPosts={setPosts} />
      </header>
      <main>
        <PostList  />
      </main>
    </MyContext.Provider>
  )
}

export default App
