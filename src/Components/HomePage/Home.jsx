import { useContext, useEffect, useState } from 'react';
import Client from 'predicthq';
import { Cards } from "../Cards/Cards";
import { ArrCardsDataContextContext ,AllGolbal} from '../GlobalVirable/Global';

function Home() {
    const arrCardsDataContextContext = useContext(ArrCardsDataContextContext)
    return (<>
      
        <Cards arr={arrCardsDataContextContext.arr} weather={arrCardsDataContextContext.weather} distance={arrCardsDataContextContext.distance} location={arrCardsDataContextContext.location}></Cards>
    </>)
}

export { Home }