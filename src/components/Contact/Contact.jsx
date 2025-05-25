
import {
  FaLocationArrow,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div data-aos="zoom-in" className="dark:bg-dark bg-slate-100 dark:text-white py-14 ">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-slate-600 py-8 px-6 rounded-xl">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Ayo bekerja sama dengan kami dalam usaha rental mobil yang akan datang.
              </h1>
              <p className="text-gray-400">
                Hubungi Kami di Bawah Ini !
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
                <a
                href="/about-us"
                  className="inline-flex items-center font-semibold py-2 px-3 bg-primary text-white hover:bg-primary/80 duration-200 tracking-widest uppercase rounded"
                >
                  Contact Us<FaLocationArrow className="ml-2 mt-0.5" />
                </a>                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
