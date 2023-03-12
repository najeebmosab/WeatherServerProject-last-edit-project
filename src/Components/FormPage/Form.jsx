import "./Form.css";

function From(props) {
    return (<>
        <div className="formSearsh">
            <h4>Please Enter Date</h4>
            <form action="" onSubmit={props.filterHandler}>
                <input placeholder="starting Sort from" ref={props.filterStartInput} type="date" name="" id="" />
                <input placeholder="Ending Sort to" ref={props.filterEndInput} type="date" name="" id="" />
                <button >Searsh</button>
                <button onClick={props.clearHandler}>clear</button>
                <div>
                    <h2>sort by labels</h2>
                    <select name="" id="" onChange={props.filterBySevereWeather}>

                        {
                            props.labels.map((el, idx) => {
                                return (<option value={el}>{el}</option>)
                            })
                        }
                    </select>
                </div>
            </form>
        </div>
    </>)
}

export { From }