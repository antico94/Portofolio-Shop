import React, { useEffect, useState } from "react";
import css from "./gift.module.css";
import { Cards } from "../../containers/gift-cards/gift-cards";
import { animated, Spring } from "react-spring";

const TestGift = () => {
  const [selectionIndex, setSelectionIndex] = useState(2);
  const [selection, setSelection] = useState([]);
  const pricesList = [50, 100, 150, 200, 500];
  const [giftCardValue, setGiftCardValue] = useState(100);
  const [buttonSelected, setButtonSelected] = useState(1);
  const transitionEffect = {
    transform: "scale(1) ",
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
    if (
      parseInt(event.target.id) !== 0 &&
      parseInt(event.target.id) !== Cards.length - 1
    ) {
      setSelectionIndex(parseInt(event.target.id));
    }
  };

  const circleClickHandler = (ev) => {
    setSelectionIndex(parseInt(ev) + 1);
  };

  const onClickButton = (price, index) => {
    if (index !== buttonSelected) {
      setGiftCardValue(parseInt(price));
      setButtonSelected(index);
    }
  };

  return (
    <div className={css.giftCardPage}>
      <div className={css.bg}>
        <div className={css.headerText}>
          <h1 className={css.headerTitle}>Gift Cards</h1>
          <h3 className={css.headerSubtitle}>
            Give loved one unlimited options to buy whatever they want!
          </h3>
          <p className={css.headerSubtext}>
            A gift card is always better than a unwanted gift. Chose 100%
            instant happiness delivered instantly.
          </p>
        </div>

        <div className={css.carousel}>
          {selection.map(function (element) {
            if (element === selection[1]) {
              return (
                <Spring
                  from={{
                    transform: "scale(0.5)",
                  }}
                  to={{
                    transform: "scale(1)",
                  }}
                  key={element.id}
                  config={{ delay: 100, duration: 100 }}
                >
                  {(props) => (
                    <animated.div style={props} className={css.activeCard}>
                      <p>
                        <span className={css.cardDescription}>Theme: </span>
                        {element.name}
                      </p>
                      <img
                        src={element.photo}
                        onClick={(e) => onClickCard(e)}
                        className={css.card}
                        style={transitionEffect}
                        id={element.id}
                      />
                    </animated.div>
                  )}
                </Spring>
              );
            } else {
              return (
                <img
                  src={element.photo}
                  id={element.id}
                  onClick={(e) => onClickCard(e)}
                  className={`${css.card} ${css.notActive}`}
                />
              );
            }
          })}
        </div>

        <div className={css.circlesContainer}>
          {[...Array(8).keys()].map(function (el) {
            if (el === selectionIndex - 1) {
              return (
                <svg
                  className={`${css.circle} ${css.activeCircle}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  style={{ fill: "rgb(135, 135, 135)" }}
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z" />
                </svg>
              );
            } else {
              return (
                <svg
                  className={css.circle}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  style={{ fill: "rgb(135, 135, 135)" }}
                  onClick={() => {
                    circleClickHandler(el.toString());
                  }}
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z" />
                </svg>
              );
            }
          })}
        </div>

        <div className={css.valueContainer}>
          <h2 className={css.valueTitle}>
            Gift Card Value: {giftCardValue + " "} Lei
          </h2>
          <div className={css.valueButtons}>
            {pricesList.map((price, index) => {
              if (index !== buttonSelected) {
                return (
                  <button
                    key={price}
                    id={index.toString()}
                    className={css.valueButton}
                    onClick={() => onClickButton(price, index)}
                  >
                    {price} Lei
                  </button>
                );
              } else {
                return (
                  <button
                    key={price}
                    id={index.toString()}
                    className={`${css.valueButtons} ${css.valueButtonActive} `}
                  >
                    {price} Lei
                  </button>
                );
              }
            })}
            <button className={css.valueButton}>Custom Value</button>
          </div>
        </div>

        <div className={css.dedication}>
          <div className={css.dedicationBg} />
          <div className={css.leftColumn}>
            <h2 className={css.dedicationTitle}>Recipient:</h2>
            <h3 className={css.dedicationSubtitle}>
              Complete the following boxes with the receiver details.
            </h3>
            <h3 className={css.dedicationLabels}>Name</h3>
            <input className={css.dedicationInput} />{" "}
            <h3 className={css.dedicationLabels}>Email</h3>
            <input className={css.dedicationInput} />{" "}
            <h3 className={css.dedicationLabels}>Confirm Email</h3>
            <input className={css.dedicationInput} />
          </div>
          <div className={css.rightColumn}>
            <h2 className={css.dedicationTitle}>From:</h2>
            <h3 className={css.dedicationSubtitle}>
              Complete the following boxes with your information.
            </h3>
            <h3 className={css.dedicationLabels}>Name</h3>
            <input className={css.dedicationInput} />{" "}
            <h3 className={css.dedicationLabels}>Add your message:</h3>
            <textarea maxLength={250} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestGift;
