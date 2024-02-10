import PropTypes from "prop-types";
import IMG from "../assets/logo.webp";
import HIMG from "../assets/biryaniHover.jpg";
const Card1 = ({ title }) => {
  return (
    <div className='card1-div'>
      <h2>{title}</h2>

      <img src={IMG} alt='Logo' className='logo-img' />
      <img src={HIMG} alt='Logo' className='hover-img' />
    </div>
  );
};
Card1.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Card1;
