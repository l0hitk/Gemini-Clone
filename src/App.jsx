import React, { StrictMode } from "react"
import Sidebar from './compoents/side-bar/sidebar'
import Main from './compoents/main/main'
const App=()=>{
  return(
    <StrictMode>
    <Sidebar/>
    <Main/>
    </StrictMode>
  )
}

export default App