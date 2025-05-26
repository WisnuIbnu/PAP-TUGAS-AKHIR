import { useEffect } from "react";
import PropTypes from "prop-types";
import carPng from "../../assets/byd.png";
import yellowCar from "../../assets/yaris.png";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div id='hero' className="dark:bg-dark text-dark bg-slate-100 dark:text-white duration-300">
      <div className="container min-h-[620px] flex py-16 sm:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)] dark:mt-20"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              SewaCar.id
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              SewaCar.id adalah layanan penyewaan mobil terpercaya yang hadir untuk memenuhi kebutuhan transportasi Anda. Kami menyediakan berbagai pilihan kendaraan berkualitas dengan harga terjangkau.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Tambahkan validasi prop
Hero.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Hero;
