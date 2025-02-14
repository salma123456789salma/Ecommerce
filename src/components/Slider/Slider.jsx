import Slider from "react-slick";
import img1 from "../../assets/blog-img-2.jpg";
import img2 from "../../assets/grocery-banner-2.jpg";
import img3 from "../../assets/slider-image-3.jpg";

export default function MainSlider() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="hidden md:flex gap-4">
      <div className="w-3/4 overflow-hidden rounded-lg">
        <Slider {...settings}>
          {[img1, img2, img3].map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-[400px] object-cover"
              alt=""
            />
          ))}
        </Slider>
      </div>

      <div className="w-1/4 flex flex-col gap-4">
        <div className="h-[200px] overflow-hidden rounded-lg">
          <img src={img1} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="h-[200px] overflow-hidden rounded-lg">
          <img src={img2} className="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}