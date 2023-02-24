import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("http://localhost:8000/api/hotels?featured=true&limit=4");
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || data.length < 4) {
    return <div>No featured properties available</div>;
  }
 
  const images = [
    "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&id=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8&w=1000&q=80",
    "https://media.cnn.com/api/v1/images/stellar/prod/160726150143-us-beautiful-hotels-17-bellagio-2.jpg?q=w_1900,h_1096,x_0,y_0,c_fill",
    "https://destinationdeluxe.com/wp-content/uploads/2020/09/Beautiful-Hotels-Designs-Ulaman-Bali-Destination-Deluxe.jpg",
    "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2017/01/four-seasons-hotel-the-westcliff-johannesburg.jpg?fit=1300%2C731&ssl=1",
    "https://egscholars.com/wp-content/uploads/2021/01/One-.jpg"
  ];
  
  return (
    <div className="fp">
    {data.map((property, i) => (
      <div className="fpItem" key={property._id}>
        <img src={images[i]} alt="" className="fpImg" />
        <span className="fpName">{property.name || "No name available"}</span>
        <span className="fpCity">{property.city || "No city available"}</span>
        <span className="fpPrice">Starting from ${property.cheapestPrice || "N/A"}</span>
        {property.rating && (
          <div className="fpRating">
            <button>{property.rating}</button>
            <span>Excellent</span>
          </div>
        )}
      </div>
    ))}
  </div>
  );
};

export default FeaturedProperties;