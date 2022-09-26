import React, {useState} from "react";
import FormActivity from "./FormActivity";
import Activity from "./Activity";
import "../components/stylesheets/ListActivities.css";
import "../components/stylesheets/ListActivities.css";

function ListActivities() {

    const [activities, setActivities] = useState([]);

    const addActivity = activity => {
       if (activity.Ttext.trim()) {
        activity.Ttext = activity.Ttext.trim();
        const updatedActivities = [activity, ...activities];
        setActivities(updatedActivities);
       }
    }

    const deleteActivity = id => {
        const updatedActivities = activities.filter(activity => activity.id !== id);
        setActivities(updatedActivities);
    }

    const completedActivity = id => {
        const updatedActivities = activities.map(activity => {
            if (activity.id === id ) {
                activity.Completed = !activity.Completed;
            }
            return activity;
        } );
        setActivities(updatedActivities);
    }

    return (
        <>
            <FormActivity onSubmit={addActivity} />
            <div className="ContainerListActivities">
                {
                    activities.map((activity) => 
                    <Activity
                        key={activity.id}
                        id={activity.id}
                        Ttext={activity.Ttext}
                        Completed={activity.Completed}
                        completedActivity={completedActivity}
                        deleteActivity={deleteActivity}
                     />

                    )
                }
                
            </div>
        </>
    );
}

export default ListActivities;