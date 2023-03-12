import { useContext, useEffect, useState } from 'react';
import { SelectCountry } from "../SelectCountry/SelectCountry";
import { Cards } from "../Cards/Cards";
import { From } from "../FormPage/Form";
import "./ChoseCountry.css";
import { ArrCardsDataContextContext, NameCountryContext, LabelsContext, FlagContext, AllGolbal } from '../GlobalVirable/Global';

function ChoseCountry() {
  const arrCardsDataContextContext = useContext(ArrCardsDataContextContext)
  const nameCountryContext = useContext(NameCountryContext);
  const labelsContext = useContext(LabelsContext);
  const flagContext = useContext(FlagContext)

  return (<>
    <SelectCountry nameCountryContext={nameCountryContext}></SelectCountry>
    <Cards arr={arrCardsDataContextContext.arr} weather={arrCardsDataContextContext.weather} distance={arrCardsDataContextContext.distance} location={arrCardsDataContextContext.location}></Cards>
    <div className={`sideBat ${flagContext.flag == false ? "Close" : "Open"}`}>
      <From filterStartInput={labelsContext.filterStartInput} filterEndInput={labelsContext.filterEndInput} labels={labelsContext.labels} filterBySevereWeather={labelsContext.filterBySevereWeather} filterHandler={labelsContext.filterHandler} clearHandler={labelsContext.clearHandler}></From>
    </div>
  </>);
}

export { ChoseCountry }