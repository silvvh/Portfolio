import React, { FC, ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}

const variants: Variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
