
import React, { useState } from "react";
import { PageDisplayStateProp } from "../interfaces/PageDisplayStateProp";

interface AppContextValue {
    pages: PageDisplayStateProp
    setPageDisplayState: React.Dispatch<React.SetStateAction<PageDisplayStateProp>>
}
export const AppContext = React.createContext<AppContextValue>({} as AppContextValue);

export const AppContextProvider = ({children}:any) => {
    const [pageDisplayState, setPageDisplayState] = useState({
        homePage: true,
        aboutPage: false,
        skillsPage: false,
        educationPage: false,
        experiencePage: false,
        contactPage: false
    });

    return (
        <AppContext.Provider value={{
            pages: pageDisplayState,
            setPageDisplayState: setPageDisplayState
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;