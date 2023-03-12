import "./SelectCountry.css";
import { country } from "../Data"
import { useRef } from "react";
function SelectCountry(props) {
    function showData() {
        return (<>
            {
                country.map((c, idx) => {
                    return (<><option className="optionChild" value={c.code} key={idx}>{c.name}</option>
                    </>)
                })
            }
        </>)
    }
    function getNameCountry(event) {
        props.nameCountryContext.setNameCountry(event.target.value);
    }
    return (<>
        <div className="custom-select">
            <h2>Please Choese a Country</h2>
            <select onChange={getNameCountry}>
                <option value="all">All</option>
                {showData()}
            </select>
        </div>
    </>)
}

export { SelectCountry };