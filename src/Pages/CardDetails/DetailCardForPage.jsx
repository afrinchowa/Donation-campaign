
import swal from "sweetalert";
const DetailCardForPage = ({ card }) => {
  const { id, title, image, description } = card || {};

  const handleAddToDonation = () => {
const addedDonationArray =[];
    const donationItems =JSON.parse(localStorage.getItem('donation'))

if(!donationItems){
addedDonationArray.push(card)
localStorage.setItem('donation', JSON.stringify(addedDonationArray))
swal("Good job!", "You Donate Successfully", "success");
}
else{
    const isExists =donationItems.find(card => card.id ===id)

    if(!isExists){
        addedDonationArray.push(...donationItems,card)
        localStorage.setItem('donation', JSON.stringify(addedDonationArray))
        swal("Good job!", "You Donate Successfully", "success");

    }
    else{
            swal("Error!", "No duplicate !", "error");
           } 
}

    // const addedDonationArray = [];
    // const donationItems = JSON.parse(localStorage.getItem("donation"));

    // if (!donationItems) {
    //   addedDonationArray.push(card)
    //   localStorage.setItem("donation", JSON.stringify(addedDonationArray))
    //   swal("Good job!", "You Donate Successfully", "success");
    // } else {
    //   const isExists = donationItems.find((card) => card.id == id)

    //   if(!isExists){
    //     addedDonationArray.push(...donationItems, card);
    //     localStorage.setItem("donation", JSON.stringify(addedDonationArray)); 
    //     swal("Good job!", "You Donate Successfully!", "success");
    //   }
    //      
    // }   
  };

  return (
    <div className=" flex justify-center items-center h-[80vh]">
      <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img src={image} />
          <button
            onClick={handleAddToDonation}
            className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-4 mt-4"
            data-ripple-light="true"
          >
            Donation
          </button>
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailCardForPage;
