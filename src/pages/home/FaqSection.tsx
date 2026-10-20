import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './faq.css';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const rawItems = t('faqs.items', { returnObjects: true });
  const items: FaqItem[] = Array.isArray(rawItems) ? (rawItems as FaqItem[]) : [];

  const toggleFaq = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      ref={faqRef}
      initial="hidden"
      animate={faqInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="faq-section"
      id="faqs"
    >
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">{t('faqs.title')}</h2>
        </div>

        <div className="faq-list">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-question-content">
                    <span className="faq-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="faq-question-text">{item.question}</h3>
                  </div>
                  <span className="faq-icon" aria-hidden="true">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className="faq-answer-wrapper">
                  <div className="faq-answer">
                    <p style={{ margin: 0 }}>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default FaqSection;
