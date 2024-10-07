import React from "react";

const Upper = () => {
  return (
    <>
    <div className="flex flex-row items-center justify-around border border-black h-20">
        <div className="logo h-20 w-20  overflow-hidden">
          <img
            src="https://res.cloudinary.com/dqh8wwun7/image/upload/v1728295398/logo_opgknz.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="middle flex justify-center items-center gap-5">
          <h1 className="text-xl">Stays</h1>
          <h1 className="text-xl">Experience</h1>
        </div>
        <div className="right flex justify-center items-center gap-4">
            <h1 className="text-lg">Airbnb your home</h1>
            <div className="logo h-10 w-10  overflow-hidden"><img src="https://res.cloudinary.com/dqh8wwun7/image/upload/v1728295955/location_q9x1ey.png" alt="" className="w-full h-full object-cover"/></div>
            <div className="logo h-14 w-14  overflow-hidden"><img src="https://res.cloudinary.com/dqh8wwun7/image/upload/v1728296008/account_e1a073.png" alt="" className="w-full h-full object-cover"/></div>
        </div>
      </div>
    </>
  );
};

export default Upper;
