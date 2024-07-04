import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext';

export default function Header() {
 
 const {setUserInfo, userInfo} = useContext(UserContext)
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    })
    .then(response => {
      if (response.ok) {
        response.json().then(userInfo => {
          setUserInfo(userInfo);
        });
      } else {
        setUserInfo(null); // Clear username if user is not authenticated
      }
    })
    .catch(error => {
      console.error('Error fetching profile:', error);
      setUserInfo(null);
    });
  }, []);

  function logout () {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null)
  }

  const username = userInfo?.username;


  return (
    <header>
        <Link className="logo" to="/" className="logo">
          DevShehzor
        </Link>
        <nav>
          {username && (
            <>
            <span>Hello, {username}</span>
              <Link to="/create">Create new post</Link>
              <a onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
    </header>
  )
}
