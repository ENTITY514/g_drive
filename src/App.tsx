import React from 'react';
import './App.css';
import { Auth } from './Pages/Auth/auth';
import { Main } from './Pages/Main/main';
import { useAppSelector } from "./Store/hooks/redux"
import { IUser } from './Store/models/User';


function App() {
  const state: IUser = useAppSelector(state => state.UserSlice)
  return (
    <div className="App">
      {
        state.is_auth ?
          <Main />
          :
          <Auth />
      }
    </div>
  );
}

export default App;
