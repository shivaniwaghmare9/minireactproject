
// import { BrowserRouter,Route,Routes } from "react-router-dom";
// import Layout from "./Layout";
// import Display from "./pages/Display";
// import Sorting from "./pages/Sorting";
// import Search from "./pages/Search";
// const App=()=>{
//   return(
//     <>
//      <BrowserRouter>
//        <Routes>
//           <Route path="/" element={<Layout/>}>
//           <Route index element={<Display/>}/>
//           <Route path="display" element={<Display/>}/>
//           <Route path="sort" element={<Sorting/>}/>
//           <Route path="search" element={<Search/>}/>
//           </Route>
//        </Routes>
//      </BrowserRouter>
//     </>
//   )
// }
// export default App;


import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./Layout";
import Display from "./pages/Display";
import Sorting from "./pages/Sorting";
import Search from "./pages/Search";
const App=()=>{
  return(
    <>
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Display/>}/>
          <Route path="display" element={<Display/>}/>
          <Route path="sort" element={<Sorting/>}/>
          <Route path="search" element={<Search/>}/>
          </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;