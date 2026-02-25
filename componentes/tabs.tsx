"use client";

import { FC, ReactElement, ReactNode, useMemo, useState } from "react";

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: ReactNode;
}

export const Tab: FC<TabProps> = ({ children }) => {
  return <div>{children}</div>;
};

export const Tabs: FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = useMemo(() => {
    const normalizedChildren = Array.isArray(children) ? children : [children];
    return normalizedChildren as ReactElement<TabProps>[];
  }, [children]);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-3 justify-center items-center">
        {tabs.map((tab, index) => (
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

      <div className="mt-5">{tabs[activeIndex]}</div>
    </div>
  );
};
