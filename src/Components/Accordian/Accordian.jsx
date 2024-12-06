import React, { useState } from 'react';
import styles from './accordian.module.css';

import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";

const Accordion = ({ question, answer , key }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div key={key} className={styles.accordionItem}>
            <div className={styles.question} onClick={toggleAccordion}>
                {question}
                <span >{isOpen ? (<GoDash  style={{fontSize : "30px"}} />) : (<FaPlus />)}</span>
            </div>
            {isOpen && <div className={styles.answer}>{answer}</div>}
        </div>
    );
};

export default Accordion;
