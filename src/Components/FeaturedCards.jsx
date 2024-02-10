import Card1 from "./Card1";
import PropTypes from "prop-types";
const FeaturedCards = ({ category, item1, item2, item3, bg }) => {
  return (
    <div
      className='featuredCards-div'
      style={{
        background: `url(${bg})`,
      }}
    >
      <h2>{category}</h2>
      <div className='card-holder'>
        <Card1 title={item1} />
        <Card1 title={item2} />
        <Card1 title={item3} />
      </div>
    </div>
  );
};
FeaturedCards.propTypes = {
  category: PropTypes.string,
  item1: PropTypes.string.isRequired,
  item2: PropTypes.string.isRequired,
  item3: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};
export default FeaturedCards;
