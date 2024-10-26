import bannerImg1 from "../../../assets/images/banner/1.jpg";
import bannerImg2 from "../../../assets/images/banner/2.jpg";
import bannerImg3 from "../../../assets/images/banner/3.jpg";
import bannerImg4 from "../../../assets/images/banner/4.jpg";
import bannerImg5 from "../../../assets/images/banner/5.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div
        id="slide1"
        className="carousel-item relative w-full h-[550px] rounded-xl"
      >
        <img src={bannerImg1} className="w-full rounded-xl " />
        <div className="absolute flex items-center h-full top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] rounded-xl">
          <div className="text-white space-y-7 pl-11  w-1/2">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn bg-[#FF3811] border-none opacity-80 mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute  right-10 bottom-0 flex gap-4 -translate-y-1/2 transform">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-orange-400 border-none"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[550px]">
        <img src={bannerImg2} className="w-full rounded-xl" />
        <div className="absolute  right-10 bottom-0 flex gap-4 -translate-y-1/2 transform">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide3"
            className="btn bg-orange-400 border-none btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[550px]">
        <img src={bannerImg3} className="w-full rounded-xl" />
        <div className="absolute  right-10 bottom-0 flex gap-4 -translate-y-1/2 transform">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide4"
            className="btn bg-orange-400 border-none btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[550px]">
        <img src={bannerImg4} className="w-full rounded-xl" />
        <div className="absolute  right-10 bottom-0 flex gap-4 -translate-y-1/2 transform">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide5"
            className="btn bg-orange-400 border-none btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full h-[550px]">
        <img src={bannerImg5} className="w-full rounded-xl" />
        <div className="absolute  right-10 bottom-0 flex gap-4 -translate-y-1/2 transform">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a
            href="#slide1"
            className="btn bg-orange-400 border-none btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
