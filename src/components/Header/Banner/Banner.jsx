const Banner = () => {
  return (
  <div>
      <div
      className="  h-[70vh] bg-slate-100 bg-no-repeat opacity-5 "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/gjDfzkb/business-people-transparent-background-16.jpg)",
      }}
    >
      
    </div>



<div className="absolute -mt-[350px] ml-80  ">
<h1 className="text-5xl font-bold  ">
        I Grow By Helping People In Need
      </h1>
      <div className="  flex justify-center items-center ">
        <div className="block  pt-12  ">
          <input
            className=" w-96 rounded-lg p-2"
            type="text"
            placeholder="Search here..."
          />
          <button
            className=" font-semibold rounded-lg p-2 bg-red-500 text-white"
            type="search"
          >
            Search
          </button>
        </div>
      </div>
</div>
  </div>
  );
};

export default Banner;
