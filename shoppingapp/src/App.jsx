
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./Layout";
import Display from "./pages/Display";
import Sorting from "./pages/Sorting";
const App=()=>{
  return(
    <>
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Display/>}/>
          <Route path="display" element={<Display/>}/>
          <Route path="sort" element={<Sorting/>}/>
          </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;