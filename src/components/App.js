import React from 'react'
import styles from'../styles/appStyles.module.css'
import '../styles/App.css'
const App = () => {
  return (
    
    <div id="main">
      <h1 className={styles.success}>Success</h1>
      <h1  id='error' style={{color:"red", fontSize:50}} >Error</h1>
    </div>
  
  )
}


export default App;
