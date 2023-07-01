import Button from "../components/button";

const Footer = () => {
  return (
    <>
      <footer className="relative flex flex-col justify-center text-center  items-center bottom-0 left-0 right-0  ">
        <section className="bg-purple1 text-purple3  py-6 w-full lg:flex lg:justify-between lg:px-9  ">
          <div className="  drop-shadow-sm lg:drop-shadow-none flex gap-4 justify-center max-w-[80%] mx-auto lg:m-0 ">
            <img
              src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1687440073/therapy_3_eiigs0.png"
              alt="logo"
              className="w-12 h-12"
            />
            <div className="">
              <h1 className=" border-b-2 leading-5 border-purple3 w-10.5rem max-h-10 rounded-r-sm rounded-t-sm text-transparent  bg-clip-text bg-gradient-to-b from-purple3 to bg-purple3 ">
                PRING HEALTH CARE
              </h1>

              <div>
                <h4 className="text-[0.7rem] font-semibold text-purple3 ">
                  PROFESSIONAL SERVICE, PLC
                </h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-between ">
            <ul className="footer--links flex  py-2 w-1/2 gap-2 lg:gap-6  ">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Service</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href=""> Contact </a>
              </li>
            </ul>
          </div>

          <Button />
        </section>
        <section className="bg-purple4 w-full text-purple3 font-thin text-sm pt-4 pb-3 ">
          <p>
            <span className="hover:text-cream px-2">
              <a href="">+12366388333</a>
            </span>
            <span className="border-l border-purple3 px-2 hover:text-cream">
              <a href=""> pringhealth@gmail.com</a>
            </span>
            <span className="border-l border-purple3 px-2 hover:text-cream">
              <a href="">Somewhere in the world</a>
            </span>
          </p>

          <p className="mt-8">
            <small>
              Copyright © 2023. All rights reserved. | Policy | Terms
            </small>
          </p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
