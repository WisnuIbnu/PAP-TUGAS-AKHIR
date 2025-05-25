import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About'
import Services from '../components/Services/Services';
import AppStoreBanner from '../components/AppStoreBanner/AppStoreBanner';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Testimonials from '../components/Testimonial/Testimonials';

const Home = () => {
  // ✅ Dark mode handling
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // ✅ Init AOS animation
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div className="bg-slate-100 dark:bg-dark dark:text-white text-black overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <About />
      <Services />
      <Testimonials/>
      <AppStoreBanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
