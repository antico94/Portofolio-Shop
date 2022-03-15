import React, {useEffect, useState} from 'react';
import css from './test.module.css';
import {Cards} from '../../containers/gift-cards/gift-cards';
import {animated, Spring} from 'react-spring';

const TestGift = () => {

  const [selectionIndex, setSelectionIndex] = useState(1);
  const [selection, setSelection] = useState([]);
  const pricesList = [50, 100, 150, 200, 500];
  const transitionEffect = {
    transition: 'all .5s',
    transform: 'scale(1) rotate(360deg)',
    rotate: '360deg',
  };

  useEffect(() => {
    if (selectionIndex < 1) {
      setSelectionIndex(1);
    }
    if (selectionIndex > 8) {
      setSelectionIndex(8);
    }
    setSelection(Cards.slice(selectionIndex - 1, selectionIndex + 2));

  }, [selectionIndex]);

  const onClickCard = (event) => {
    if (parseInt(event.target.id) !== 0 && parseInt(event.target.id) !==
        Cards.length - 1) {
      setSelectionIndex(parseInt(event.target.id));
    }
  };

  const circleClickHandler = (ev) => {
    setSelectionIndex(parseInt(ev) + 1);
  };

  return (
      <div className={css.giftCardPage}>
        <div className={css.bg}>
          <div className={css.headerText}>
            <h1 className={css.headerTitle}>Gift Cards</h1>
            <h3 className={css.headerSubtitle}>
              Give loved one unlimited options to buy whatever they want!</h3>
            <p className={css.headerSubtext}>
              A gift card is always better than a unwanted gift. Chose 100%
              instant happiness delivered instantly.
            </p>
          </div>

          <div className={css.carousel}>
            {selection.map(function(element) {
              if (element === selection[1]) {
                return (
                    <Spring
                        from={{
                          transform: 'scale(0.5)',
                        }}
                        to={{
                          transform: 'scale(1)',
                        }}
                        key={element.id}
                        config={{delay: 100, duration: 100}}>
                      {props =>
                          (
                              <animated.div style={props}
                                            className={css.activeCard}>
                                <p><span
                                    className={css.cardDescription}>Theme: </span>{element.name}
                                </p>
                                <img src={element.photo}
                                     onClick={e => onClickCard(e)}
                                     className={css.card}
                                     style={transitionEffect}
                                     id={element.id}/>
                              </animated.div>
                          )}
                    </Spring>);

              } else {
                return <img src={element.photo}
                            id={element.id}
                            onClick={e => onClickCard(e)}
                            className={`${css.card} ${css.notActive}`}
                />;
              }

            })}
          </div>

          <div className={css.circlesContainer}>
            {[...Array(8).keys()].map(function(el) {
              if (el === selectionIndex - 1) {
                return <svg
                    className={`${css.circle} ${css.activeCircle}`}
                    xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24"
                    style={{fill: 'rgb(135, 135, 135)'}}>
                  <path
                      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"/>
                </svg>;
              } else {
                return <svg
                    className={css.circle}
                    xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24"
                    style={{fill: 'rgb(135, 135, 135)'}}
                    onClick={() => {circleClickHandler(el.toString());}}>
                  <path
                      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"/>
                </svg>;
              }

            })}
          </div>

          <div className={css.valueContainer}>
            <h2 className={css.valueTitle}>Gift Card Value: 100 Lei</h2>
            <div className={css.valueButtons}>
              {pricesList.map((price) => {
                return (
                    <button
                        key={price}
                        className={css.valueButton}
                        onClick={(e)=>{e.target.classList.add(css.valueButtonActive)}}
                    >{price} Lei
                    </button>);
              })}
              <button className={css.valueButton}>Custom Value</button>
            </div>
          </div>
        </div>
      </div>);
};

export default TestGift;