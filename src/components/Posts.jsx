import { Comment } from "./Comment";
import styles from "./Posts.module.scss";

export function Posts() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src="https://avatars.githubusercontent.com/u/25964446?v=4"
            alt="Foto do autor da postagem"
            className={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>Augusto Marsola</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio ás 08:13h" dateTime="2022-05-11 08:10:10">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala pessoal 👏</p>

        <p>
          Acabei de publicar mais uma contribuição no meu portfólio. Corre lá
          que está um projeto sensacional.
        </p>

        <p>
          <a href="#">super.proj/megaproj</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a> <a href="#">#ignite</a>{" "}
          <a href="#">#decolar</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
