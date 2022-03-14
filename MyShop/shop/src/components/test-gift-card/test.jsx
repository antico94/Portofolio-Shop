import React, {useEffect, useState} from 'react';
import css from './test.module.css';
import {Cards} from '../../containers/gift-cards/gift-cards';

const TestGift = () => {

  const [selectionIndex, setSelectionIndex] = useState(1);
  const [selection, setSelection] = useState([]);
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
    setSelectionIndex(parseInt(event.target.id));
  };

  const circleClickHandler = (ev) => {
    ev.target.classList.add(css.activeCard);
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
                return (<div className={css.activeCard}>
                  <p><span
                      className={css.cardDescription}>Theme: </span>{element.name}
                  </p>
                  <img src={element.photo} onClick={e => onClickCard(e)}
                       className={css.card}
                       style={transitionEffect}
                       id={element.id}/>
                </div>);
              } else {
                return <img src={element.photo} onClick={e => onClickCard(e)}
                            className={`${css.card} ${css.notActive}`}
                            id={element.id}/>;
              }

            })}
          </div>

          <div className={css.circlesContainer}>
            {[...Array(8).keys()].map(function(el) {
              return <svg
                  onClick={e => circleClickHandler(e)}
                  className={css.circle}
                  xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24"
                  style={{fill: 'rgb(135, 135, 135)'}}>
                <path
                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"/>
              </svg>;

            })}
          </div>
        </div>
      </div>);
};

export default TestGift;
