import React, { useState } from 'react';
import styles from './accordian.module.css';

// import { GoDash } from "react-icons/go";
// import { FaPlus } from "react-icons/fa6";

import { FaPlus, FaMinus } from "react-icons/fa"; // Import FontAwesome icons

const Accordion = ({ question, answer, id }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div key={id} className={styles.accordionItem}>
            <div className={styles.question} onClick={toggleAccordion}>
                {question}
                <span >{isOpen ? (<FaMinus  />
                ) : (<FaPlus  />)}</span>
            </div>
            {isOpen && <div className={styles.answer}>{answer}</div>}
        </div>
    );
};

export default Accordion;
