import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./styles/global.css"


function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
