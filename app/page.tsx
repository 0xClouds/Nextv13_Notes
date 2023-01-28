import styles from "./Home.module.css";
// These render as home pages
//Basically this replaces App/Index.js

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <h1>Home Page</h1>
      <p> some content</p>
    </div>
  );
}
