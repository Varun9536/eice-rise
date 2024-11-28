import React, { useState } from 'react';
import styles from './accordian.module.css';

const Accordion = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.accordionItem}>
            <div className={styles.question} onClick={toggleAccordion}>
                {question}
                <span className={styles.icon}>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className={styles.answer}>{answer}</div>}
        </div>
    );
};

export default Accordion;
