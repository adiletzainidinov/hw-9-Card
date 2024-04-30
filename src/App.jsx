import React, { useEffect, useState } from 'react';
import Login from './components/login/Login';
import Home from './components/home/Home';
import MainHeader from './components/main-header/MainHeader';
import Characters from './components/characters/Characters';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState({});
  const [characters, setCaracters] = useState([]);
  const [users,setUsers] = useState(false)


  const initialUrl = 'https://jsonplaceholder.typicode.com/users';
  const fetchCaracters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCaracters(data)
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCaracters(initialUrl);
  },[]);
  console.log(characters);

  const loginHandler = (email, password) => {
    setUserName({ email: email, password: password });
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLogged');
    setIsLoggedIn(false);
  };

  const showCard = () => {
    setUsers(prev => !prev)
  }
  return (
    <>
    <React.Fragment>
     
      <MainHeader showCard={showCard} />
      { !users && <Characters characters={characters} /> }
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
        
      </main>
    </React.Fragment>
    
    
    </>
  );
}

export default App;
