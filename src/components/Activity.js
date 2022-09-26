import React from "react";
import "../components/stylesheets/Activity.css"
import { AiOutlineCloseCircle } from "react-icons/ai";

function Activity({ id, Ttext, Completed, completedActivity, deleteActivity}) {
    return (
        <div className={Completed ? "ContainerActivity Completed" : "ContainerActivity"}>
            <div className="Text-Activity"
                onClick={() => completedActivity(id)}>
                {Ttext}
            </div>
            <div className="IconsActivity"
                onClick={() => deleteActivity(id)}>
                <AiOutlineCloseCircle className="IconDelete"/>
            </div>
        </div>

    );
}

export default Activity;