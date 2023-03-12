import { useRef } from "react";
import "./NewWeather.css";
import { useLocation, useNavigate } from "react-router-dom";

function NewWeather() {
    const title = useRef(null);
    const labels = useRef(null);
    const startDate = useRef(null);
    const endDate = useRef(null);
    const uploadImage = useRef(null);
    const navigate = useNavigate();
    async function AddNewWeatherServer(event) {
        event.preventDefault();

        const product = {
            title: title.current.value,
            labels: labels.current.value,
            startDate: startDate.current.value,
            endDate: endDate.current.value,
            uploadImage: uploadImage.current.value,
        }
        const res = await fetch(`https://63f620f39daf59d1ad8276a4.mockapi.io/WeatherProject`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });
        if (res.ok) {
            const data = res.json();
            console.log(data);
            navigate("/WeatherServer");
        }
    }

    return (<>
        <form action="" className="addWeatherForm" onSubmit={AddNewWeatherServer}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" ref={title} name="title" id="title" />
            </div>
            <div>
                <label htmlFor="Labels">Labels</label>
                <input type="text" ref={labels} name="Labels" id="Labels" />
            </div>
            <div>
                <label htmlFor="dateStart">Start Date</label>
                <input type="date" ref={startDate} name="dateStart" id="dateStart" />
            </div>
            <div>
                <label htmlFor="dateEnd">End Date</label>
                <input type="date" ref={endDate} name="dateEnd" id="dateEnd" />
            </div>
            <div>
                <label htmlFor="image">Upload image</label>
                <input type="text" ref={uploadImage} name="image" id="image" />
            </div>
            <div className="divSubmit">
                <button className="btnSubmit">Add</button>
            </div>
        </form>
    </>);

}
export { NewWeather }
