import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailCardForPage from "./DetailCardForPage";


const CardDetails = () => {
  const [card, setCard] = useState({});

  const { id } = useParams();
  const cards = useLoaderData();
  useEffect(() => {
    const findCardDetails = cards?.find((card) => card.id == id);
    setCard(findCardDetails)
  }, [id, cards]);

  console.log(card);

  return(
    <div>
    <DetailCardForPage card={card} ></DetailCardForPage>
    </div>
  )

  
};

export default CardDetails;
