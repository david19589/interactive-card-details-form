/* eslint-disable react/prop-types */
import Styles from "./Header.module.css";
import CardBack from "/src/assets/bg-card-back.png";
import CardFront from "/src/assets/bg-card-front.png";
import CardLogo from "/src/assets/card-logo.svg";

const Header = (props) => {
  const { name, number, month, year, cvc } = props;

  return (
    <div className={Styles.headerDiv}>
      <div className={Styles.backCardDiv}>
        <img src={CardBack} alt="cardBack" className={Styles.cardBack} />
        <h1 className={Styles.cvcOnCard}>{cvc ? cvc : "000"}</h1>
      </div>
      <div className={Styles.frontCardDiv}>
        <img src={CardFront} alt="cardFront" className={Styles.cardFront} />
        <img src={CardLogo} alt="cardLogo" className={Styles.cardLogo} />
        <h1 className={Styles.cardNumberOnCard}>
          {number.length > 0 ? number : "0000 0000 0000 0000"}
        </h1>
        <h1 className={Styles.nameOnCard}>{name ? name : "Jane Appleseed"}</h1>
        <h1 className={Styles.expDateOnCard}>
          {month ? month : "00"}/{year ? year : "00"}
        </h1>
      </div>
    </div>
  );
};

export default Header;
