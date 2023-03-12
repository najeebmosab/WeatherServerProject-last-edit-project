import { useRef } from "react";
import "./UpdateWeather.css";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateWeather() {
    const title = useRef(null);
    const labels = useRef(null);
    const startDate = useRef(null);
    const endDate = useRef(null);
    const uploadImage = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    async function  UpdateWeatherServer(event) {
        debugger
        event.preventDefault();

        const product = {
            title: title.current.value,
            labels: labels.current.value,
            startDate: startDate.current.value,
            endDate: endDate.current.value,
            uploadImage: uploadImage.current.value,
        }
        const res = await fetch(`https://63f620f39daf59d1ad8276a4.mockapi.io/WeatherProject/${location.state.id}`, {
            method: 'PUT',
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
        <form action="" className="addWeatherForm" onSubmit={UpdateWeatherServer}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" defaultValue={location.state.title} ref={title} name="title" id="title" />
            </div>
            <div>
                <label htmlFor="Labels">Labels</label>
                <input type="text" defaultValue={location.state.labels} ref={labels} name="Labels" id="Labels" />
            </div>
            <div>
                <label htmlFor="dateStart">Start Date</label>
                <input type="date" defaultValue={location.state.startDate} ref={startDate} name="dateStart" id="dateStart" />
            </div>
            <div>
                <label htmlFor="dateEnd">End Date</label>
                <input type="date" defaultValue={location.state.endDate} ref={endDate} name="dateEnd" id="dateEnd" />
            </div>
            <div>
                <label htmlFor="image">Upload image</label>
                <input type="text" defaultValue={location.state.uploadImage} ref={uploadImage} name="image" id="image" />
            </div>
            <div className="divSubmit">
                <button className="btnSubmit">Update</button>
            </div>
        </form>
    </>);

}
export { UpdateWeather }
