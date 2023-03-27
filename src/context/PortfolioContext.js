import {createContext, useState} from 'react';

export const PortfolioContext = createContext();


const PortfolioContextProvider=({children})=>{
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");

    return(
        <PortfolioContext.Provider value={{name,setName,email,setEmail,phone,setPhone}}>
            {children}

        </PortfolioContext.Provider>
    )
}

export default PortfolioContextProvider;
    