import {createContext} from 'react'

const UserContext = createContext({ 
      user :  {
        name : "Kaushal",
        email : "apastambhkaushal2001@gmail.com",},    
    }
);

export default UserContext;