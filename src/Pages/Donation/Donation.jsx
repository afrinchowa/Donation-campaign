import { useEffect, useState } from "react";
import DetailCardForPage from "../CardDetails/DetailCardForPage";
const Donation = () => {
  const [donation, setDonation] = useState([]);

  const [noFound, setNofound] = useState(false);
  const [isShow, setIsShow]=useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNofound("no data found");
    }
  }, []);
  console.log(donation);
 return (
    <div>
        
            {noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> : <div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    {
                    isShow ? donation.map((card) => (<DetailCardForPage key={card.id} card={card}></DetailCardForPage>)):
                    donation.slice(0,4).map((card) => (<DetailCardForPage key={card.id} card={card}></DetailCardForPage>))
                    }
                </div>
                <button onClick={() =>setIsShow(!isShow) } className=" px-5 bg-lime-400 block rounded-lg mx-auto">See All</button>
                
                </div>}
        
    </div>
 )

  
};
export default Donation;
