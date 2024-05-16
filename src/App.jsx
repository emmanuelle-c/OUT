import { Outlet } from "react-router-dom";
import Timer from "./components/pages/Timer";
function App() {
  return (
    <>
      <Timer initialSeconds={60} />
      <Outlet />
    </>
  );
}

export default App;
