

const DonationCard = ({card}) => {
    const { id, title, image, catagory } = card || {};
  return (
    <div>
      <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img src={image} alt="ui/ux review check" />
        </div>
        <div className="p-6">
        

          <button>{catagory}</button>
          <h3 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
