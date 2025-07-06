
import React, {createContext} from 'react';
export const  AppContext = createContext(null);

const AppcontextProvider = ({children}) =>{
  const value ={}
  return (
 <Appcontext.Provider value={value}>

    {children}
  </Appcontext.Provider>
  )
 

}

export default AppcontextProvider;