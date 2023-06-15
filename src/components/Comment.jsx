import { ThumbsUp, Trash, TrashSimple } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/CaiooDE.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorTime}>
              <strong>Caio Estrella</strong>
              <time title='20 de junho as 7:30' dateTime='2023-06-20 7:30:00'>Cerca de 1h</time>
            </div>

            <button title='Deletar comentario'>
              <Trash size={24} />
            </button>
          </header>
          <p>
            teste de pitaco isso ai porra
          </p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}