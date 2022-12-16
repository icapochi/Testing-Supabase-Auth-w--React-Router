
import Home from './pages/Home'
import Nav from './pages/Nav'
import NoPage from './pages/NoPage'
import Auth from './pages/Auth'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Auth />} />
          <Route path='home' element={<Home />} />
          {/* <Route index element={<Home />} /> */}
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
