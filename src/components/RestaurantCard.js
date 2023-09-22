import {CDN_URL} from '../utils/constant';

const styleCard = {
    backgroundColor: "white",
  };

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
      <div className="res-card" style={styleCard}>
        <img
          alt="res-logo"
          className="res-logo"
          src={
            CDN_URL +
            resData.info.cloudinaryImageId
          }
        />
        <h3>{resData.info.name}</h3>
        <h3>{resData.info.cuisines.join(", ")}</h3>
        <h3>{resData.info.avgRating} stars</h3>
        <h3>{resData.info.costForTwo}</h3>
        <h3>{resData.info.sla.deliveryTime} mins</h3>
      </div>
    );
  };

  export default RestaurantCard;
  