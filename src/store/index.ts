import React, { createContext, ReactNode, useState, useContext } from "react";

// Kontekst uchun turlarni aniqlaymiz
type ViewCard = "col" | "row";

interface StoreChangeType {
  viewCard: ViewCard; // Hozirgi ko'rinish turi (column yoki row)
  changeCardView: (card: ViewCard) => void; // Ko'rinishni o'zgartirish funksiyasi
}

interface StoreProviderProps {
  children: ReactNode; // Bolalar elementlari
}

// Kontekstni yaratyapmiz
const StoreContext = createContext<StoreChangeType | undefined>(undefined);

// StoreProvider komponenti
export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const [direction, setDirection] = useState<ViewCard>("row"); // Boshlang'ich qiymat 'row'

  // Ko'rinishni o'zgartiradigan funksiya
  const changeDirection = (card: ViewCard) => {
    setDirection(card);
  };

  return (
    <StoreContext.Provider
      value={{
        viewCard: direction,
        changeCardView: changeDirection,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

// Kontekstdan foydalanish uchun maxsus hook
export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
