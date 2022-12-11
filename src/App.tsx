import React from 'react';
import { Route, Router, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { About } from './Pages/About/about';
import { AuthPage } from './Pages/Auth/auth_page';
import { Main } from './Pages/Main/main';
import { useAppSelector } from "./Store/hooks/redux"
import { IUser } from './Store/models/User';


function App() {
  const state: IUser = useAppSelector(state => state.UserSlice)
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='main' element={<Main />} />
          <Route path='auth' element={<AuthPage />} />
          <Route path='' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
