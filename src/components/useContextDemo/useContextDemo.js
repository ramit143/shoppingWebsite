import React, { useContext, useState } from "react";

let UserDetailsContex = React.createContext(null);

export function MensClothing () {
    const context = useContext(UserDetailsContex);
    return (
        <div className="bg-warning p-4">
        <h4>Men's Clothing:-{context.UserName}</h4>

        </div>
    )
}

export function HomeComponent () {
    const context = useContext(UserDetailsContex);
    return (
        <div className="bg-light text-dark p-3">
            <h2>Home:- {context.UserName}</h2>
            <MensClothing />
        </div>
    )
}


export function UseContextDemo () {

    const [userName,setUserName] = useState('');

    function handleUserChange (e) {
          setUserName(e.target.value);
    }

    return (
        <div className="container-fluid bg-dark text-white p-3">
        <h2>Main Component</h2>
        <dl>
            <dt>UserName</dt>
            <dd>
                <input type="text" onChange={handleUserChange} />
            </dd>
        </dl>
          <UserDetailsContex.Provider value={{UserName:userName}}>
              <HomeComponent />
          </UserDetailsContex.Provider>
        </div>
    )
}