import { createContext, useContext, useState } from "react";
import { useAsyncError } from "react-router-dom";

const UIContext = createContext();

export function UIProvider({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eventLocation, setEventLocation] = useState("");
    
    const APP_NAME = import.meta.env.VITE_APP_NAME;

    return (
        <UIContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, isModalOpen, setIsModalOpen, APP_NAME, eventLocation, setEventLocation }}>
            {children}
        </UIContext.Provider>
    );
}

// custom hook for easier usage
export function useUI() {
    return useContext(UIContext);
}
