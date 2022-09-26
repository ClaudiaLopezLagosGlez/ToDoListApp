import React, { useState} from "react";
import "../components/stylesheets/FormActivity.css";
import { v4 as uuidv4 } from "uuid";

function FormActivity(props) {

    const [input, setInput] = useState("");

    const handleChange = e => {
        setInput(e.target.value);

    }

    const handleShipping = e => {
        e.preventDefault();
     
        const newTask = {
            id: uuidv4(),
            Ttext: input,
            Completed: false
        }

       props.onSubmit(newTask);
    }



    return (
        <form 
        className="ContainerFormActivity"
        onSubmit={handleShipping}>
            <input
                className="InputActivity"
                type="text"
                placeholder="Write your activity"
                name="Ttext"
                onChange={handleChange}
            />
            <button className="BotonAdd">
                Add Activity
            </button>
        </form>
    );
}

export default FormActivity;