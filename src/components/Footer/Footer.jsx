
const Footer = () => {
  return (
 <div className='bg-slate-100 dark:bg-dark'>
      <div className='text-center'>

          <div className='w-max flex items-center mx-auto gap-2'>
            <span className="text-3xl font-bold font-serif">SewaCar.id</span>
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
