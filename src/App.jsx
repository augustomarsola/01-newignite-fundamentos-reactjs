import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Posts } from "./components/Posts";

import styles from "./App.module.scss";

import "./global.scss";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Posts />
          <Posts />
        </main>
      </div>
    </>
  );
}

export default App;
