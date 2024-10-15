import './App.scss'
import Contador from'./components/Buttons/Contador'
import List from './components/products/product'

function App() {

  return (
    <>
     <h1 className='mainTitle'>Desserts</h1>
     <Contador/>
     <List />
    </>
  )
}

export default App
