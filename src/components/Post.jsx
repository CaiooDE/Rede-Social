import { Avatar } from './Avatar';
import { Comment } from "./Comment";
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src="https://github.com/CaiooDE.png" />
          <div className={styles.authorInfo}>
            <strong>Caio Estrella</strong>
            <span>Desenvolvedor FrontEnd</span>
          </div>
        </div>

        <time title='20 de junho as 7:30' dateTime='2023-06-20 7:30:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>
          <p>Testando aqui</p>
          <p>testando maior um pouco para so ver se funciona mesmo essa merda de verdade, programar é um porre mesmo</p>
          <p><a href="https://github.com/CaiooDE">https://github.com/CaiooDE</a></p>
          <p><a href="#">#fudido123 #emprego #desenvolvimento</a></p>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentario"
        />
        
        <footer>
          <button type='submit'>Publicar</button>
        </footer>  
      </form>

      <div className={styles.commentlist}> 
       <Comment />
       <Comment />
       <Comment />
      </div> 
    </article>
  )
}