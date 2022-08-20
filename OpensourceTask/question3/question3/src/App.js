import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav/nav";
import Chat from "./components/chatbody/chatbody"

function App() {
  return (
    <div className="_main">
     <Nav/>
     <Chat/>
    </div>
  );
}

export default App;
