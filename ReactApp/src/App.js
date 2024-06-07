import EmployeeComponent from "./components/EmployeeComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { BrowserRouter,Route,Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<ListEmployeeComponent/>}></Route>
        <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
        <Route path="/add-employee" element={<EmployeeComponent/>}></Route>
        <Route path="/edit-employee/:id" element={<EmployeeComponent/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
