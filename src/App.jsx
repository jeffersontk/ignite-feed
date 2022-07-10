import styles from './App.module.css'
import { Header } from "./components/Header";
import { Sidebar } from "./components/SideBar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>

        </main>
      </div>
    </div>
  )
}

export default App
