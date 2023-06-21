import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discound For {"  "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            the next <br className="sm:block hidden" /> {"  "}
            <span className="text-gradient">Generation</span> 
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
      <GetStarted/>
          </div>
        </div>
        <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] w-full  leading-[75px]"> Payment Method.</h1>
     <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, corrupti. Dolore perspiciatis, rem officiis dolores pariatur eveniet! Praesentium, magni inventore dolore nesciunt doloremque reiciendis eius tempora non saepe, commodi mollitia.</p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>  
        <img src={robot} alt="robot" className=" relative w-[100%] h-[100%]  z-[5]" />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full top-0 bottom-40 white__gradient"/>
          <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 blue__gradient"/>
      </div>
      {/* if the screen equal or larger than the breakpoint it will be hidden */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  );
};

export default Hero;
