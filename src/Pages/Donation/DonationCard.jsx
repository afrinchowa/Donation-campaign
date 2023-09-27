const DonationCard = ({ card }) => {
  const { id, title, image, catagory,backgroundColor,textColor } = card || {};
  return (
    <div>
      <div style={{backgroundColor:backgroundColor,color:textColor} }  className="relative flex max-w-[24rem] flex-col rounded-xl bg-clip-border shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none  bg-clip-border shadow-none">
          <img src={image} alt="ui/ux review check" />
        </div>
        <div className="p-6">
          <button>{catagory}</button>
          <h3 className="block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
