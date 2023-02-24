import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8000/api/hotels/countByCity?cities=Dhaka,coxbazar,Uttara"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading... please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/79975442.jpg?k=012d2af5208e4107d1ec0ced22b91c80cf245ecaedc753b8dc2b4ab480de3fd8&o=&hp=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Dhaka</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/69022255.jpg?k=59b9ff78482e7bd2bb2d752d32e05e721388281ab6494659dbad49595f310a32&o=&hp=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Cox’s Bazar</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/156250882.jpg?k=30f97e99a91b817bb0344d8d8f696f9472bed464265c17d9473b2b2714833701&o=&hp=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Uttara</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
