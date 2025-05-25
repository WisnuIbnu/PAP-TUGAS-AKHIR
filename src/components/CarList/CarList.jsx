import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";
import car4 from "../../assets/car2.png";
import car5 from "../../assets/car1.png";
import car6 from "../../assets/avanza.png";


const carList = [
  {
    name: "Innova Reborn",
    price: 600,
    image: whiteCar,
    aosDelay: "20",
  },
  {
    name: "Isuzu Mux",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "Ford Eco-Sport",
    price: 100,
    image: car3,
    aosDelay: "1000",
  },
  {
    name: "Fortuner",
    price: 100,
    image: car4,
    aosDelay: "0",
  },
  {
    name: "JEEP",
    price: 140,
    image: car5,
    aosDelay: "500",
  },
  {
    name: "Avanza Feloz",
    price: 100,
    image: car6,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
        Model Kendaraan
        </h1>
        <div className="flex">
          <p data-aos="fade-up" data-aos-delay="400" className="text-xl font-semibold font-serif pb-10 hover:text-primary ">
            <a href="/">Beranda </a>    
          </p>
          <p data-aos="fade-up" data-aos-delay="400" className="text-xl font-semibold font-serif pb-10">
            /Model Kendaraan
          </p>
        </div>
        {/* Car listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {carList.map((data, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
            >
              <div className="w-full h-[120px]">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-primary font-semibold">{data.name}</h1>
                <div className="flex justify-between items-center text-xl font-semibold">
                  <p>Rp. {data.price}k/Hari</p>
                  <a href="#">Detail Mobil</a>
                </div>
              </div>
              <p className="text-xl font-semibold absolute top-0 left-3">
                12Km
              </p>
            </div>
          ))}
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
