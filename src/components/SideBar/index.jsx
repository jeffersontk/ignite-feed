import styles from './SideBar.module.css'
import { GithubLogo } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/46037459?v=4" alt="Jefferson Brito"
        />
        <strong>Jefferson Brito</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="https://github.com/jeffersontk" target="_blank">
          <GithubLogo weight="bold" size={20} />
          Meu GitHub
        </a>
      </footer>
    </aside>
  )
}