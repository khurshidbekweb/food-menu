import React, { createContext, ReactNode, useState, useContext } from "react";

// Kontekst uchun turlarni aniqlaymiz
type ViewCard = "col" | "row";

interface StoreChangeType {
  viewCard: ViewCard; 
  changeCardView: (card: ViewCard) => void; 
}


const StoreContext = createContext<StoreChangeType | undefined>(undefined);

interface StoreProviderProps {
  children: ReactNode; // Bolalar elementlari
}
export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [direction, setDirection] = useState<ViewCard>("row");

  const changeDirection = (card: ViewCard) => {
    setDirection(card);
  };

  return (
    <StoreContext.Provider value={{viewCard: direction, changeCardView:changeDirection}}>
      {children}
    </StoreContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
