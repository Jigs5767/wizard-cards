import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Listing from "./screens/Listing";

function App() {
  return (
    <div className="w-screen h-screen">
      <Listing />
      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
