import { HashLink } from 'react-router-hash-link';
import footerLogo from "/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaWhatsapp,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    to: "/#hero",
  },
  {
    title: "Product",
    to: "/#product",
  },
  {
    title: "Testimonials",
    to: "/#testimoni",
  },
  {
    title: "Contact",
    to: "/#contact",
  },
];


const Footer = () => {

  return (
     <div className='bg-slate-100 dark:bg-dark'>
     <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 px-2 sm:px-0 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              SewaCar.id
            </h1>
            <p>
            SewaCar.id menyediakan mobil sewaan berkualitas untuk pengalaman berkendara yang nyaman, aman, dan profesional. 🚗🛣️🛡️
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
                      key={link.title}
                    >
                      <HashLink
                        to={link.to} 
                        className=""
                      >
                        {link.title}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
                      key={link.title}
                    >
                      <HashLink
                        to={link.to} 
                        className=""
                      >
                        {link.title}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href=""
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href=""><FaWhatsapp className="text-3xl" /></a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <a href="">Fakultas Ilmu Komputer, Universitas Brawijaya, Malang</a>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <a href="">0912312412</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-10 py-6'>
        <p>@ 2025 <a href="/">PAP - Kelompok 10</a>. All right reserved.</p>
        <ul className='flex gap-10 mt-4 items-center justify-center sm:mt-0'>
          <li><a target="_blank" rel="noopener noreferrer" href="https://wisnuibnu-dev.vercel.app/">Github</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://wisnuibnu-dev.vercel.app/">LinkedIn</a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://wisnuibnu-dev.vercel.app/">X</a></li>
        </ul>
      </div> 
    </div>
  );
};

export default Footer;
