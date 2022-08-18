import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Auth from './pages/Auth/Auth'
import Dashboard from './pages/Dashboard/Dashboard'
import NotFound from './pages/NotFound/NotFound'
import {ProtectedRoute, LoginRoute} from './utils/PrivateRoute';

//Context
import Cars from './pages/Cars/Cars';
import Categories from './pages/Categories/Categories';

function App() {


  return (
    <BrowserRouter>
      <div className="app">
          {/*App body */}
          <div className='app__body'>
              <Routes>
                  
                  {/* Protected Routes */}
                  <Route exact path='/' element={<ProtectedRoute/>}>
                    <Route exact path='/' element={<Dashboard/>}/>
                  </Route>

                  <Route path='/categories' element={<ProtectedRoute/>}>
                    <Route path='/categories' element={<Categories tab="List"/>}/>
                  </Route>
                  <Route path='/categories/add' element={<ProtectedRoute/>}>
                    <Route path='/categories/add' element={<Categories tab="Add"/>}/>
                  </Route>
                  <Route path='/categories/update/:id' element={<ProtectedRoute/>}>
                    <Route path='/categories/update/:id' element={<Categories tab="Update"/>}/>
                  </Route>

                  <Route path='/cars' element={<ProtectedRoute/>}>
                    <Route path='/cars' element={<Cars tab="List"/>}/>
                  </Route>
                  <Route path='/cars/add' element={<ProtectedRoute/>}>
                    <Route path='/cars/add' element={<Cars tab="Add"/>}/>
                  </Route>
                  <Route path='/cars/update/:id' element={<ProtectedRoute/>}>
                    <Route path='/cars/update/:id' element={<Cars tab="Update"/>}/>
                  </Route>
                  
                  {/* Login Routes */}
                  <Route path='/login' element={<LoginRoute/>}>
                    <Route  path='/login' element={<Auth tab="Login"/>}/>
                  </Route>

                  <Route path='/signup' element={<LoginRoute/>}>
                    <Route path='/signup' element={<Auth tab="SignUp"/>}/>
                  </Route>

                  {/* 404 Page Not Found */}
                  <Route path='*' element={<NotFound/>}/>

              </Routes>
          </div>
      </div>
  </BrowserRouter>
  );
}

export default App;
