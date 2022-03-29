import './App.css';
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';
import "./assets/css/app.css"

function App() {
  return (
    <>
      <div id="wrapper">
        <SideBar />
        <ContentWrapper />
      </div>
    </>
  );
}

export default App;

