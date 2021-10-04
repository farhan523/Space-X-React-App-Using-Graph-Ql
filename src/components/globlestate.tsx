import React,{useState,createContext} from 'react'

type contexttype =  {
    number : string,
    setNumber :any

}

let context = createContext({} as contexttype)

const  Globlestate: React.FC= ({children}) => {

    let [number,setNumber] = useState<string>('18');

    

    return (
        <context.Provider value={{number: number,setNumber}}>
            <div style={{display:'flex'}}>
            {children}
            </div>
        </context.Provider>
    )
}

export default Globlestate

export {context}