import React from "react";
import './accordion.scss';
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  open: boolean;
  onClick: () => void;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

export const AccordionItem = ({
  title,
  subtitle,
  children,
  onClick,
  open = false,
}: Props) => {

  return (
    <article key={`project-${title}`}>
      <div className="title"
        onClick={onClick}
      >
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {open && (
        <motion.div 
          className="content"
          variants={container}
        >
          <motion.div
            // variants={item}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </article>
  );
};