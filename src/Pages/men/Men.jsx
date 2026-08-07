import react from "react";
import NavBar from "../../Components/NavBar";

const Men = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-row items-center justify-between gap-5 mt-10">
        <h2>Men</h2>
        <div className="flex gap-7 text-sm font-semibold">
          <a href="">Shoes</a>
          <a href="">Clothing</a>
          <a href="">Accessories</a>
          <a href="">Shop All</a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Men;
