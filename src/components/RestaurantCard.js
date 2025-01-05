import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {

    const { info } = resData;  // Destructuring the restaurant info

    return (
        <div className="card">
            <img
                className="card-img"
                src={`${CDN_URL}${info.cloudinaryImageId}`}  // Proper string interpolation
                alt={info.name}
            />
            <h3>{info.name}</h3>
            <h4>Cuisines: {info.cuisines?.join(", ")}</h4>
            <h4>Delivery Time: {info.sla?.deliveryTime} mins</h4>
            <h4>Rating: {info.avgRating || "N/A"}</h4>
        </div>

    );
};

export default RestaurantCard;
