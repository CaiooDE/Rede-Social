import { Post } from "./components/Post";
import './global.css';
import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';
import styles from "./App.module.css";


export function App() {
  return (
    <div>
     <Header />

     <div className={styles.wrapper}>
        
        <Sidebar />
        

        <main>
          <Post 
          author="Caio Estrella" 
          content="gosduhfgsdoufhsdkjfhsdiugdnaosidhasouihfgasdoljkndasoihsddoaskidnsaoifnasdjnasfu"/>
          <Post 
          author="Laura Machado"
          content="fgpdhgdosjasdasfasojdhfasiufsjdnasfbnsaiubdasiiausbdashifbkghsdjghdsg"/>
        </main>

      </div> 
    </div>
  )
}


