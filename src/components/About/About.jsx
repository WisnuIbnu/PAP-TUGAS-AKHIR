
import CarPng from "../../assets/car6.png";
import Box1 from '../../assets/about/icon1.png'
import Box2 from '../../assets/about/icon2.png'
import Box3 from '../../assets/about/icon3.png'

const Data = [
  {
    car : 20,
    description : 'Type Mobil',
    picture : Box1,
  },
  {
    car : 85,
    description : 'Gerai Rental',
    picture : Box2,
  },
  {
    car : 75,
    description : 'Gerai Repair',
    picture : Box3,
  },
];

const About = () => {
  return (
    <div id="product" className="dark:bg-dark text-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className=" sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-xl sm:text-xl font-bold font-serif dark:text-white"
              >
                Tentang Kami
              </h1>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl font-semibold font-serif dark:text-white"
            >
              Mulai Petualangan Anda Bersama Kami!
            </h1>
              <p data-aos="fade-up" className="dark:text-white">
                SewaCar.id adalah layanan penyewaan mobil terpercaya yang hadir untuk memenuhi kebutuhan transportasi Anda. Kami menyediakan berbagai pilihan kendaraan berkualitas dengan harga terjangkau. Pelayanan ramah, proses mudah, dan armada terawat menjadi prioritas utama kami untuk memberikan pengalaman berkendara yang nyaman dan aman bagi setiap pelanggan.
              </p>

              <div data-aos="fade-up" className="flex flex-wrap gap-4 items-center">
                {Data.map((data, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md  "
                  >
                    <img
                      src={data.picture}
                      alt="car-icon"
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">{data.car}</h4>
                      <p className="text-sm text-gray-600">{data.description}</p>
                    </div>
                  </div>
                ))}
              </div>


              <button data-aos="fade-up" className="button-outline">
                <a href="https://wisnuibnu-dev.vercel.app/" target="_blank" rel="noopener noreferrer" >
                Learn More
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
