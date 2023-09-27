const DonationCard = ({ card }) => {
  const { id, title,price, image, catagory,backgroundColor,textColor,catagoryColor } = card || {};
  return (
    <div>
      <div style={{backgroundColor:backgroundColor} }  className="relative flex max-w-16 rounded-xl bg-clip-border shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none  bg-clip-border shadow-none">
          <img src={image} alt="ui/ux review check" />
        </div>
        <div className="p-6 ">
          <button style={{backgroundColor:catagoryColor ,color:textColor}}>{catagory}</button>
          <h3 className="block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">
            {title}
          </h3>
          <h3 style={{color:textColor}} className=" p-2 block font-sans  font-semibold leading-snug tracking-normal antialiased">
            {price}.00
          </h3>
          <button className="p-2 rounded-lg text-white" style={{backgroundColor:textColor }}>View details</button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
