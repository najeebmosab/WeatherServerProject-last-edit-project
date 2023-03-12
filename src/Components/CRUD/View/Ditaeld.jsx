import "./Ditaeld.css"
import { Link, useNavigate } from 'react-router-dom';
import { useMemo, useState } from "react";

function Ditaeld() {
    const [weatherData, setWeatherData] = useState([]);
    const navigater = useNavigate();
    function deleteWeatherData(id) {

        const data = weatherData.filter((el) => { return el.id !== id });
        console.log("data for product", data);
        fetch(`https://63f620f39daf59d1ad8276a4.mockapi.io/WeatherProject/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            if (response.ok) {
                alert("Delete Done");
                setWeatherData([...data]);
            } else {
                // The item was not deleted, handle the error
                alert("Some thing error");
            }
        })
            .catch(error => {
                alert("Some thing error");

            });


    }

    useMemo(async () => {
        const res = await fetch("https://63f620f39daf59d1ad8276a4.mockapi.io/WeatherProject");
        const data = await res.json();
        setWeatherData([...data]);
    }, []);

    function updateProduct(id) {
        navigater(`/UpdateWeather/${id}`, { state: weatherData.find((w) => { return w.id === id }) });

    }
    return (<>
        <div className="mockApiContainer">
            <div className="addDitaeld">
                <Link to={"/AddWeatherServer"}>Add Weather Server</Link>
            </div>
            <div className="cardCockApi">
                {
                    weatherData.map((data) => {
                        return (<>
                            <div className="cards" key={data.id}>
                                <div className="CRUDStyle">
                                    <button onClick={() => {
                                        deleteWeatherData(data.id);
                                    }} className="BTNDel">Delete</button>

                                    <button onClick={() => {
                                        updateProduct(data.id)
                                    }} className="BTNUp">Update</button>
                                </div>
                                <img src={data.uploadImage} className="cardsWeatherDiv" alt="" />
                                <p>{data.title}</p>
                                <h4>{data.labels}</h4>
                                <div className="dateDiv">
                                    <h6>{data.startDate}</h6>
                                    <h6>{data.endDate}</h6>
                                </div>
                            </div>

                        </>)
                    })
                }
            </div>
        </div>
    </>);
}
export { Ditaeld }