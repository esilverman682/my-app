import React from 'react';
import styles from 'scss/components/Hero.module.scss';
import { motion } from "framer-motion";
interface Props {
  title: string;
  id?: string;
  bgImage?: string;
  buttonText?: string;
  buttonURL?: string;
  button2Text?: string;
  button2URL?: string;
  description?: string;
  phone?: string;
  children?: React.ReactNode;
}

function Hero({
  title = 'Hero Title',
  id,
  bgImage,
  buttonText,
  buttonURL,
  button2Text,
  button2URL,
  description,
  phone,
  children,
}: Props): JSX.Element {
  return (
    <section
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...(id && { id })}
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
      className={styles.hero}>
      <div className={styles.wrap}>
        <motion.h1
         className="title has-text-weight-bold is-1 is-size-2-mobile is-spaced"
         layoutId="title"     
        >              
         {title}
        </motion.h1>
        <div className={styles.intro}>
          <div className={styles.children}>{children}</div>
          {buttonText && buttonURL && (
            <p>
              <a href={buttonURL} className="button">
                {buttonText}
              </a>  
            </p>
          )}
          {button2Text && button2URL && (
            <p>
              <a href={button2URL} className="button button-secondary">
                {button2Text}
              </a>
            </p>
          )}
          <motion.p
                className="subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {description}{' '}
            <a href="#">
              {phone}
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Hero;