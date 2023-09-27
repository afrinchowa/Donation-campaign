import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const { id, title, image, catagory,catagoryColor,backgroundColor,textColor } = card || {};

  return (
   <div>
   <Link to={`/cards/${id}`}>
   <div >       
     <div style={{backgroundColor:backgroundColor,color:textColor} } className="relative flex w-80 flex-col rounded-xl bg-clip-border shadow-md">
     
        <div  className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-clip-border shadow-lg shadow-blue-gray-500/40">
        <img src={image} />
        </div>
        <div className="p-3 ">
          <button style={{backgroundColor:catagoryColor}}
            className="select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase bg-slate-400 "
            type="button"
            data-ripple-light="true"
          >
            {catagory}
          </button>
        </div>
        <div className="p-3 pb-6">
          <h5  className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal 
           antialiased">
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
