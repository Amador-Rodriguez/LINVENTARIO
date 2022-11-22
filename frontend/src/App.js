import React from 'react';
import { Main } from './pages/main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Register } from './register/register';
import { Index } from './index/index';
import { Product } from './pages/newProduct';
import { NewTransaction } from './pages/newTransaction';
import { Dashboard } from './pages/dashborad'; 
import { Products } from './pages/search'; //./pages/search
import { Profile } from './pages/profile';

export const App = () => {

  return(
    <Router>
      <Routes>
      <Route path="/" element={<Index />} exact />
      <Route path="/login" element={<Login />} exact/>
      <Route path="/register" element={<Register/>} exact/>
      <Route path="/main" element={<Main />} exact/>
      <Route exact path="/newProduct" element={<Product />} />
      <Route exact path="/newTransaction" element={<NewTransaction />}></Route>
      <Route exact path="/dashboard" element={<Dashboard />}></Route>
      <Route exact path="/search" element={<Products />}></Route>
      <Route exact path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
};
