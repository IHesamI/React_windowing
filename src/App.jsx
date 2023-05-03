import './App.css'
import useRandomData from './random'
import RenderList from './windowviewport';

function App() {
  const data = useRandomData();
  
  return (
    <>
    <RenderList Data={data}/>
    </>
  )
}

export default App
