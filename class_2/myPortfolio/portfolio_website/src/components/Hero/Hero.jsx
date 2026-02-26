import "./style.css";
import Image from "./Image/ktk.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <div>
          <h1>My PortFolio Website</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            quod. Sequi odio maxime suscipit error voluptates numquam, molestias
            non consectetur.
          </p>
        </div>
      </div>
      <div className="right">
        <div>
          <img src={Image} alt="my image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
