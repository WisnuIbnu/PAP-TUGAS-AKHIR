import { useState } from "react";
import team1 from "../../assets/team/wisnu2.png";
import buAlmira from "../../assets/team/almira.png";
import team2 from "../../assets/team/nimah.png";
import team3 from "../../assets/team/nisa.png";
import team4 from "../../assets/team/yuan.png";


const TeamOne = [
  {
    id: 1,
    img:team4,
    title: "Jati Yuana Marta Wibawa",
    description: "Sebagai UI/UX Designer, Yuan merancang antarmuka yang menarik dan alur interaksi yang intuitif untuk menciptakan pengalaman pengguna yang optimal.",
  },
  {
    id: 2,
    img:buAlmira,
    title: "Almira Syawli, S.Kom., M.Kom.",
    description: "Dosen pengampu mata kuliah Perancangan Antarmuka Pengguna yang membimbing proses pembuatan website SewaCar.id sebagai proyek tugas akhir praktikum.",
  },
  {
    id: 3,
    img:team2,
    title: "Amaliyah Syahidatun Ni’mah",
    description: "Sebagai Project Manager, Amaliyah mengatur jalannya proyek, memastikan komunikasi tim berjalan lancar, dan mengelola alur kerja pembangunan website SewaCar.id.",
  },
];

const TeamTwo = [
  {
    id: 1,   
    img:team3,
    title: "Nisa’ Aulia Harismadani",
    description: "Sebagai Technical Writer, Nisa’ bertugas menyusun dokumentasi teknis yang jelas dan ringkas, memastikan pengguna memahami informasi produk dengan mudah.",
  },
  {
    id: 2,
    img:team1,
    title: "Wisnu Ibnu Muttaqiem",
    description: "Wisnu sebagai Front-End Developer yang bertanggung jawab dalam merancang dan mengimplementasikan antarmuka pengguna untuk website SewaCar.id.",
  },
];


const OurTeam = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowPopup = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <div id="" className="container mt-10">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
        Tim Kami
        </h1>
        <div className="flex">
          <p data-aos="fade-up" data-aos-delay="400" className="text-xl font-semibold font-serif pb-10 hover:text-primary ">
            <a href="/">Beranda</a>    
          </p>
          <p data-aos="fade-up" data-aos-delay="400" className="text-xl font-semibold font-serif pb-10">
            /Team
          </p>
        </div>

        {/* Header section */}
        <div  className="text-left mb-24">
          <h1 data-aos="fade-up" className="text-5xl font-serif font-bold text-dark dark:text-white text-center">Our Team</h1>
          <p data-aos="fade-up" className="text-sm sm:text-lg font-serif text-dark dark:text-white text-center mt-5">Tim kami terdiri dari mahasiswa yang berkolaborasi dalam mengembangkan SewaCar.id, sebuah website penyewaan mobil berbasis web yang dirancang sebagai bagian dari tugas mata kuliah Perancangan Antarmuka Pengguna (PAP). Proyek ini bertujuan untuk menerapkan pengembangan antarmuka pengguna menggunakan teknologi modern seperti React JS dan Tailwind CSS.</p>
        </div>
        
        {/* Team One */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {TeamOne.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] mt-10 sm:mt-20"
            >
              {/* Image */}
              <div className="h-[100px]">
                <img src={data.img} alt={data.title} className="w-48 block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md" />
              </div>
              
              {/* Details */}
              <div className="p-4 text-center">

                <h1 className="text-xl font-bold">{data.title}</h1>
                <p>{data.description.split(" ").slice(0, 5).join(" ")}{data.description.split("").length > 10 && "..."}</p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={() => handleShowPopup(data)}
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Two */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 md:gap-0 place-items-center mt-20">
          {TeamTwo.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[350px] mt-10 sm:mt-20"
            >
              {/* Image */}
              <div className="h-[100px]">
                <img src={data.img} alt={data.title} className="w-48 block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md" />
              </div>
              
              {/* Details */}
              <div className="p-4 text-center">

                <h1 className="text-xl font-bold">{data.title}</h1>
                <p>{data.description.split(" ").slice(0, 7).join(" ")}{data.description.split("").length > 10 && "..."}</p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={() => handleShowPopup(data)}
                >
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md text-center relative">
            <button onClick={handleClosePopup} className="absolute top-2 right-2 text-gray-500">✖</button>
            <img src={selectedProduct.img} alt={selectedProduct.title} className="w-40 mx-auto mb-4" />
            <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
            <p className="text-gray-500 dark:text-gray-300">{selectedProduct.description}</p>
            <button onClick={handleClosePopup} className=" bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary mr-1">Kembali</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurTeam;
