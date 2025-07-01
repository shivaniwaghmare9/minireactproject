
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./Layout";
import Display from "./pages/Display";
const App=()=>{
  return(
    <>
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Display/>}/>
          </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;