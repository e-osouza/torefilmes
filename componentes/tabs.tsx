"use client";

import { useState, ReactNode, FC } from "react";

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: ReactNode;
}

// Subcomponente separado
export const Tab: FC<TabProps> = ({ children }) => {
  return <div>{children}</div>;
};

// Componente principal
export const Tabs: FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = Array.isArray(children) ? children : [children];

  return (
    <div className="w-full">
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
        {tabs.map((tab: any, index: number) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-[360px] uppercase py-3 px-15 text-sm leading-[1.2] rounded-full transition-all duration-200 cursor-pointer 
              ${
                activeIndex === index
                  ? "border-2 border-white text-black bg-white"
                  : "border-2 border-white text-white"
              }`}
          >
            {tab.props.label}
          </button>
        ))}
      </div>

      {/* Conteúdo da tab ativa */}
      <div className="mt-5">{tabs[activeIndex]}</div>
    </div>
  );
};