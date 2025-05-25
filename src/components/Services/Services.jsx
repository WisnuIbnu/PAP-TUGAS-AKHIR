import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Harga Terbaik",
    icon: (
      <FaCameraRetro className="text-5xl duration-300" />
    ),
    link: "#",
    description: "Memberikan harga terbaik untuk setiap layanan sewa mobil kami.",
    aosDelay: "0",
  },
  {
    name: "Cepat dan Aman",
    icon: (
      <GiNotebook className="text-5xl duration-300" />
    ),
    link: "#",
    description: "Proses sewa yang cepat dengan jaminan keamanan selama perjalanan.",
    aosDelay: "500",
  },
  {
    name: "Sopir Berpengalaman",
    icon: (
      <SlNote className="text-5xl duration-500" />
    ),
    link: "#",
    description: "Sopir profesional yang siap mengantar Anda dengan nyaman dan aman.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-dark text-dark bg-slate-100 dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Mengapa Harus Bersama Kami ?
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card  text-center group space-y-3 sm:space-y-6 p-4 sm:py-16  bg-gray-200 hover:bg-black/80 dark:hover- text-dark dark:bg-primary dark:text-dark dark:hover:text-white rounded-lg  hover:text-primary"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
