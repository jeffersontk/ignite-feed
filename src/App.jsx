import styles from './App.module.css'
import { Header } from "./components/Header";
import { Post } from './components/Post';
import { Sidebar } from "./components/SideBar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
