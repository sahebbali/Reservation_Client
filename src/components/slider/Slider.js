import SimpleImageSlider from "react-simple-image-slider";

const images = [
    "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=",
    "https://media.istockphoto.com/id/838103468/photo/interior-view-of-gorgeous-hotel.jpg?s=612x612&w=0&k=20&c=peSg1FxZfAonlNQlB_4Pu-d-4T60imo_YkvmVWMTbYI=",
    "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
    "https://thumbs.dreamstime.com/b/luxury-hotel-4480742.jpg"
  ];
 
const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1345}
        height={550}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}
export default Slider;