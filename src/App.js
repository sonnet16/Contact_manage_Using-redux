import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Add from "./componets/Add";
import Edit from "./componets/Edit";
import Home from "./componets/Home";
import Navbar from "./componets/Navbar";

function App() {
  return (
    <div className="App">
      {/* /add, /edit/:id ,  */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/add" component={() => <Add />} />
        <Route exact path="/edit/:id" component={() => <Edit />} />
      </Switch>
    </div>
  );
}

export default App;
