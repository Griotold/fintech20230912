import logo from "./logo.svg";
import Welcome from "./components/Welcome";
import "./App.css";
import StateComponent from "./components/StateComponent";
import EventComponent from "./components/EventComponent";
import ListComponents from "./components/ListComponents";
import StyledComponents from "./components/StyledComponents";

function App() {
  return (
    <div className="App">
      <Welcome username="Griotold1" age={253}></Welcome>
      {/* <StateComponent></StateComponent> */}
      <ListComponents></ListComponents>
      <EventComponent></EventComponent>
      <StyledComponents></StyledComponents>
    </div>
  );
}

export default App;
