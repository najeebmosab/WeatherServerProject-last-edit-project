import "./Cards.css";
import { country } from "../Data";


function Cards(props) {
    return (<>
        <div >
            <div className="cardContainer">
                {

                   props.arr.length !=0 && props.arr?.map((data) => {
                        return (<>
                            <div className="card transforms" key={data.id}>
                                <div className="locationFarFromMe">
                                    {
                                        props.distance(props.location.latitude, props.location.longitude, data.location[0], data.location[1])
                                    }
                                </div>
                                <div className={`card card-${props.weather[data.labels[0]]}`}>
                                    <div className={` ${props.weather[data.labels[0]]}`}></div>
                                </div>
                                <div className="status">
                                    <p>{data.title}</p>
                                </div>
                                <div className="time">
                                    <p>{data.start.slice(0, 10)}</p>
                                    <p>{data.end.slice(0, 10)}</p>
                                </div>

                            </div>

                        </>)
                    })
                }
            </div>
        </div>

    </>)
}

export { Cards }