import React, { useState } from "react";
import MainLayout from "./layouts/MainLayout";

const LogWork = () => {
    const [workoutType, setWorkoutType] = useState("");
    const [activityType, setActivityType] = useState("");
    const [duration, setDuration] = useState("");
    const [distance, setDistance] = useState("");
    const [exerciseType, setExerciseType] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data, e.g., send it to a server
        console.log({
            workoutType,
            activityType,
            duration,
            distance,
            exerciseType,
            sets,
            reps,
            weight,
        });
    };

    return (
        <MainLayout title="Log Work | My Page">
            <div className="container mt-5">
                <h2>Add a New Workout</h2>
                <form onSubmit={handleSubmit}>
                    {/* Workout Type Selection */}
                    <div className="mb-3">
                        <label className="form-label">Workout Type</label>
                        <select
                            value={workoutType}
                            onChange={(e) => setWorkoutType(e.target.value)}
                            className="form-select"
                        >
                            <option value="">Select workout type</option>
                            <option value="timed">Timed Event (e.g., Running)</option>
                            <option value="reps">Reps Event (e.g., Weightlifting)</option>
                        </select>
                    </div>

                    {/* Timed Workout Form */}
                    {workoutType === "timed" && (
                        <>
                            <div className="mb-3">
                                <label className="form-label">Activity Type</label>
                                <select
                                    value={activityType}
                                    onChange={(e) => setActivityType(e.target.value)}
                                    className="form-select"
                                >
                                    <option value="">Select activity type</option>
                                    <option value="running">Running</option>
                                    <option value="cycling">Cycling</option>
                                    <option value="walking">Walking</option>
                                    {/* Add more options for activities */}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Duration (minutes)</label>
                                <input
                                    type="number"
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                    className="form-control"
                                    placeholder="Enter time in minutes"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Distance (Optional)</label>
                                <input
                                    type="number"
                                    value={distance}
                                    onChange={(e) => setDistance(e.target.value)}
                                    className="form-control"
                                    placeholder="Enter distance in km or miles"
                                />
                            </div>
                        </>
                    )}

                    {/* Reps Workout Form */}
                    {workoutType === "reps" && (
                        <>
                            <div className="mb-3">
                                <label className="form-label">Exercise Type</label>
                                <select
                                    value={exerciseType}
                                    onChange={(e) => setExerciseType(e.target.value)}
                                    className="form-select"
                                >
                                    <option value="">Select exercise</option>
                                    <option value="squat">Squat</option>
                                    <option value="pushup">Push-Up</option>
                                    <option value="deadlift">Deadlift</option>
                                    {/* Add other exercises */}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Sets</label>
                                <select
                                    value={sets}
                                    onChange={(e) => setSets(e.target.value)}
                                    className="form-select"
                                >
                                    <option value="">Select sets</option>
                                    <option value="1">1 Set</option>
                                    <option value="2">2 Sets</option>
                                    <option value="3">3 Sets</option>
                                    <option value="4">4 Sets</option>
                                    <option value="5">5 Sets</option>
                                    {/* Add more options for sets */}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Reps per Set</label>
                                <select
                                    value={reps}
                                    onChange={(e) => setReps(e.target.value)}
                                    className="form-select"
                                >
                                    <option value="">Select reps</option>
                                    <option value="5">5 Reps</option>
                                    <option value="8">8 Reps</option>
                                    <option value="10">10 Reps</option>
                                    <option value="12">12 Reps</option>
                                    {/* Add more options for reps */}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Weight (Optional)</label>
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    className="form-control"
                                    placeholder="Enter weight used (kg or lbs)"
                                />
                            </div>
                        </>
                    )}

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-primary">
                        Log Workout
                    </button>
                </form>
            </div>

        </MainLayout>
    );
};

export default LogWork;
