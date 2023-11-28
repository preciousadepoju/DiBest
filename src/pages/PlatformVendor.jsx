import HeroSection from "../components/HeroSection";
import SectionHead from "../components/SectionHead";
import Search from "../components/Search";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import Banner from "../components/Banner";
import {React, useState, useEffect } from "react";
import axios from "axios";

const PlatformVendor = () => {
  const [data, setData] = useState([]);
  const [ff, setff] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://panel.dibestspot.com/api/public/category"
        );
        const responseData = response.data;
        console.log(responseData);
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const gp = (f) => {
  setff(f);
}

  return (
    <>
      
      <HeroSection/>
      <SectionHead/>
      <Search data={data} gp={gp} />
      <Products data={data} ff={ ff} />
      <Pagination/>
      <Banner/>
     
    </>
  );
};

export default PlatformVendor;
