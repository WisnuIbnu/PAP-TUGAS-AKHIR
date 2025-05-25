
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Budi Hartono",
    text: "Sewa mobil di SewaCar.id sangat praktis dan cepat. Banyak pilihan mobil dengan kondisi prima. Saya menyewa untuk keperluan keluarga dan sangat puas dengan pelayanannya.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Rina Maharani",
    text: "Pelayanan customer service-nya ramah dan responsif. Proses booking online mudah dan transparan. Mobil diantar tepat waktu dan bersih. SewaCar.id sangat saya rekomendasikan!",
    img: "https://picsum.photos/105/105",
  },
  {
    id: 3,
    name: "Andika Prasetyo",
    text: "Saya pakai SewaCar.id untuk perjalanan dinas. Mobilnya nyaman, sopir profesional, dan harga sewa sangat terjangkau. Akan menggunakan jasa ini lagi untuk keperluan selanjutnya.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    text: "SewaCar.id membantu banget saat liburan ke luar kota. Gampang cari mobil yang sesuai kebutuhan. Fitur pencarian dan pemesanan di websitenya sangat user-friendly.",
    img: "https://picsum.photos/104/104",
  },
];

const Testimonials = () => {
  
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimoni" className="py-10 mb-10 bg-slate-100 dark:bg-dark">
      <div className="container">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
        Testimonial
        </h1>
        <div className="flex">
          <p data-aos="fade-up" data-aos-delay="400" className="text-xl font-semibold font-serif pb-10 hover:text-primary ">
            <a href="/">Beranda</a>    
          </p>
          <p data-aos="fade-up" data-aos-delay="400" className="text-xl font-semibold font-serif pb-10">
            /Testimonial
          </p>
        </div>

        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-4xl font-semibold font-serif text-dark dark:text-white py-5">
            Apa yang Pelanggan Kami Katakan ?
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl
                card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-200 duration-300 
                relative">
                <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-xl w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3 text-start">
                      <p className="text-sm font-serif dark:text-gray-400">{data.text}</p>
                      <h1 className="text-xl font-bold  dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className=" text-9xl font-serif absolute top-0 right-0 text-gray-400">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;