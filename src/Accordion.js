import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Question = ({ title, info }) => {
  
  const [showInfo, setShowInfo ] = useState(false);
  
  const showInfoHandler = () => {
    setShowInfo(!showInfo);
  }
 

  const animationTiming = {
    enter: 400,
    exit: 200,
  }

  return (
  <article className="question">

    <header>
      <h4>{title}</h4>
      <button className="btn"
        onClick={showInfoHandler}>
        {showInfo ? "-" : "+"}
      </button>
    </header>   

    <CSSTransition 
        mountOnEnter
        unmountOnExit
        in={showInfo}
        timeout={animationTiming}
        classNames="question-container">
          
          {state => (
            <p>{info}</p>
        )}

    </CSSTransition>

  </article>);
};

export default Question;
