import React from 'react';
import {Router,Routers,Route, } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
 return (
 <>
 <Router>
    <Routers>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
    </Routers>
 </Router>
 </>
 );
}
export default App