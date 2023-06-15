import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1592656094267-764a45160876?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dm9sZWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=50" />

      <div className={styles.profile}>
        <Avatar hasBorder={true} src="https://github.com/CaiooDE.png" />

        <strong>Caio Estrella</strong>
        <span>Desenvolvedor FrontEnd</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar Perfil
        </a>
      </footer>
    </aside>
  );

}