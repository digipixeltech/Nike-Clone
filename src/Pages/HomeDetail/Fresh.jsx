import React, { useRef } from "react";
import leftIcon from "../../img/Logo/leftIcon.svg";
import rightIcon from "../../img/Logo/RightIcon.svg";
import Fresh1 from "../../img/fresh/fresh1.avif";
import Fresh2 from "../../img/fresh/fresh2.avif";
import Fresh3 from "../../img/fresh/fresh3.avif";
import Fresh4 from "../../img/fresh/fresh4.avif";
import Fresh5 from "../../img/fresh/fresh5.avif";
import Fresh6 from "../../img/fresh/fresh6.avif";
import Fresh7 from "../../img/fresh/fresh7.avif";
import Fresh8 from "../../img/fresh/fresh8.avif";
import Fresh9 from "../../img/fresh/fresh9.avif";
import Fresh10 from "../../img/fresh/fresh10.avif";

const Fresh = () => {
  const scrollRef = useRef(null);

  const Freshs = [
    { url: Fresh1,
        title: "Nike Swift",
        cat: "Women's Dri-FIT Mid-Rise 2-in-1 Running Shorts",
        price: 4700
     },
    { url: Fresh2,
        title: "Nike Sportswear Club",
        cat: "Men's trousers",
        price: 4095
     },
    { url: Fresh3,
        title: "Nike React Infinity Run",
        cat: "Men's Running Shoe",
        price: 15999
     },
    { url: Fresh4,
        title: "Nike ZoomX Vaporfly",
        cat: "Men's Racing Shoe",
        price: 25999
     },
    { url: Fresh5,
        title: "Nike Pegasus",
        cat: "Men's Running Shoe",
        price: 13999
     },
    { url: Fresh6,
        title: "Nike Air Max 90",
        cat: "Men's Lifestyle Shoe",
        price: 14999
     },
    { url: Fresh7,
        title: "Nike Dunk Low",
        cat: "Men's Basketball Shoe",
        price: 16999
     },
    { url: Fresh8,
        title: "Nike Air Zoom Pegasus", 
        cat: "Men's Running Shoe",
        price: 15999
     }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth / 1.5, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth / 1.5, behavior: "smooth" });
    }
  };

  return (
    <div className="my-13 overflow-hidden">
      <div className="flex items-center justify-between mx-5">
        <h2 className="text-2xl ml-9 font-semibold">Fresh Drops</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={scrollLeft}
            className="relative right-332 top-65 z-3 cursor-pointer text-3xl p-2 rounded-full"
            aria-label="Scroll left"
          >
            <img
              src={leftIcon}
              alt="Left"
              className="height: 56px;
    width: 56px;"
            />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            className="relative top-65 z-3 cursor-pointer p-2 rounded-full"
            aria-label="Scroll right"
          >
            <img src={rightIcon} alt="Right" className="height: 56px;
    width: 56px;" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-7 overflow-x-auto scroll-smooth pb-3 relative left-13 noscroll"
      >
        {Freshs.map((fresh, idx) => (
          <a href="" key={idx} className="shrink-0">
            <div
              className="fresh-pic rounded-lg bg-cover bg-center"
              style={{ backgroundImage: `url(${fresh.url})` }}
            ></div>
            <h3 className="mt-2 text-md font-semibold">{fresh.title}</h3>
            <p className="text-gray-600">{fresh.cat}</p>
            <p className="font-semibold">₹{fresh.price.toLocaleString()}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Fresh;
