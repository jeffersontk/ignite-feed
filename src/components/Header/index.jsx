import styles from './Header.module.css'
import IgniteLogo from '../../assets/Ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="ignite logo" />
      <strong>Ignite feed</strong>
    </header>
  )
}