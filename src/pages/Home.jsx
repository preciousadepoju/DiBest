import Carousels from "../components/Carousels";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Carousels />
      <div className="flex justify-center absolute top-[175px] left-[20%]">
        <div className="flex flex-col items-center space-y-4">
          <h1 className=" font-bold text-white welcome">
            Welcome to DiBest Spot
          </h1>
          <h3 className="text-white text-2xl font-medium explore">
            Explore, Sign-up and Connect in the Cayman Islands and the Caribbean{" "}
          </h3>
          <button
            type="button"
            className="startbtn focus:outline-none text-white bg-[#A78236] hover:bg-yellow-600 focus:ring-yellow-300 rounded-lg text-lg px-8 py-3 mt-1.5"
          >
            Start Now
          </button>
        </div>
      </div>
      <div className="flex justify-center bg-[#a78236]">
        <div className="whydibest items-center justify-around w-4/5 p-8">
          <div className="whyText">
            Why DiBest Spot <br />
            for the Caribbean?
          </div>
          <div className="cardDiv w-[60%] flex justify-between">
            <div className="whyCard w-[46%] p-8">
              <div> &#127965;&#65039; </div>
              <div className="whyCardt text-lg font-semibold">
                Cayman Islands
              </div>
              <div className="whyCardf text-base">
                Experience a marketplace designed with the unique needs of the
                Cayman Islands in mind
              </div>
            </div>
            <div className="whyCard w-[46%] p-8">
              <div> &#127802; </div>
              <div className="whyCardt text-lg font-semibold">
                Caribbean Region
              </div>
              <div className="whyCardf text-base">
                Connect with a diverse and vibrant community from across the
                Caribbean
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
