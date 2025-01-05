import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";



const Body = () => {
    // Initializing the state with the mock data
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    // One more state variable for search text
    const [SearchText, setSearchText] = useState("");
    // New state to track Top Rated filter
    const [isTopRated, setIsTopRated] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        // Safely extracting restaurant data using Optional Chaining
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setListOfRestaurants(restaurants);
        setFilteredRestaurant(restaurants);
    };

    // Function to handle filtering based on search text and top rated filter
    const applyFilters = () => {
        let filteredList = listOfRestaurants;

        // Apply Top Rated filter
        if (isTopRated) {
            filteredList = filteredList.filter(restaurant => parseFloat(restaurant?.info?.avgRating) > 4.0);
        }

        // Apply Search filter
        if (SearchText) {
            filteredList = filteredList.filter(restaurant =>
                restaurant.info.name.toLowerCase().includes(SearchText.toLowerCase())
            );
        }

        setFilteredRestaurant(filteredList);
    };

    // Shimmer UI - Conditional Rendering
    return listOfRestaurants.length === 0 ? <Shimmer /> :
        (
            <div className="body">
                <div className="container filter">
                    <div className="search">
                        <input
                            type="text"
                            className="search-text"
                            value={SearchText}
                            placeholder="Search Here"
                            // filter the restaurant cards and update the UI
                            // search text 
                            onChange={(e) => { setSearchText(e.target.value); }}
                        />

                        <button className="search-btn" onClick={applyFilters}>Search</button>

                        <button
                            className="filter-btn"
                            onClick={() => {
                                // Toggle top rated filter state
                                setIsTopRated(!isTopRated);
                                // Reapply all filters
                                applyFilters();
                            }}
                        >
                            {!isTopRated ? "Show All Restaurants" : "Top Rated Restaurants"}
                        </button>
                    </div>
                </div>

                <div className="container flex res-cards">
                    {filteredRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))}
                </div>
            </div>
        );
};

export default Body;
