import styles from "./style"
import Hero from './Components/Hero'
import {Navbar , Testominals , Billing, Business , Button , CardDeal , Clients , 
  CTA , FeedbackCard, Footer , GetStarted ,   Stats} from "./Components/compexport"
import { discount } from "./assets/exportsfile"
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
     <div className= {`${styles.paddingX} ${styles.flexCenter}`} >
        <div className={styles.boxWidth}>
          <Navbar/>
        </div>
     </div>
     <div className={`bg-primary ${styles.flexStart}`}>
      <div className={` hero ${styles.boxWidth}`}>
      <Hero/>
      </div>
     </div>
     <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testominals/>
           <Clients/>
          <CTA/>
         <Footer/>
      </div>
     </div>
    </div>
  )
}

export default App