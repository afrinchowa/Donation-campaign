import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, title, image, catagory } = card || {};

  return (
   <div>
   <Link to={`/cards/${id}`}>
   <div>       
     <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
     
        <div  className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img src={image} />
        </div>
        <div className="p-3 ">
          <button
            className="select-none rounded-lg {bgColor} py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-400 "
            type="button"
            data-ripple-light="true"
          >
            {catagory}
          </button>
        </div>
        <div className="p-3 pb-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h5>
        </div>
      </div>     
    </div>
   
   </Link>
    </div>
  
  );
};

export default Card;
