import { BrowserRouter } from 'react-router-dom'
import PageLayout from './layout/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageLayout />
      </BrowserRouter>
    </div>
  )
}

export default App
