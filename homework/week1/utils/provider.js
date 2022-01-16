import { useContext, createContext, useState} from "react";

const inineStages = {
    theme:'spring',
    setTheme:()=>{}
}

const MyThemeContext = createContext(inineStages);

export default function MyThemeProvider({children}){

    const [theme, setTheme] = useState('spring');

    return <MyThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </MyThemeContext.Provider>

}

export const useTheme = () =>{
    return useContext(MyThemeContext);
}