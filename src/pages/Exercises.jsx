import React, { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout";

const Exercises = () => {
    const [bodyPartList, setBodyPartList] = useState([]); // List of body parts
    const [equipmentList, setEquipmentList] = useState([]); // List of equipment
    const [targetList, setTargetList] = useState([]); // List of targets
    const [exercises, setExercises] = useState([]); // Filtered exercises
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // State for selected filters
    const [selectedBodyPart, setSelectedBodyPart] = useState("");
    const [selectedEquipment, setSelectedEquipment] = useState("");
    const [selectedTarget, setSelectedTarget] = useState("");

    useEffect(() => {
        const fetchDropdownOptions = async () => {
            const bodyPartUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
            const equipmentUrl = 'https://exercisedb.p.rapidapi.com/exercises/equipmentList';
            const targetUrl = 'https://exercisedb.p.rapidapi.com/exercises/targetList';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '0002ca57b1msh457ba5fb9a79692p1e9e98jsn814171ad4981',
                    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                }
            };

            try {
                // Fetch body parts
                const bodyPartResponse = await fetch(bodyPartUrl, options);
                const bodyPartResult = await bodyPartResponse.json();
                setBodyPartList(bodyPartResult);

                // Fetch equipment
                const equipmentResponse = await fetch(equipmentUrl, options);
                const equipmentResult = await equipmentResponse.json();
                setEquipmentList(equipmentResult);

                // Fetch targets
                const targetResponse = await fetch(targetUrl, options);
                const targetResult = await targetResponse.json();
                setTargetList(targetResult);

                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchDropdownOptions();
    }, []);

    const fetchFilteredExercises = async () => {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '0002ca57b1msh457ba5fb9a79692p1e9e98jsn814171ad4981',
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        };

        try {
            let url = 'https://exercisedb.p.rapidapi.com/exercises';

            if (selectedBodyPart) {
                url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`;
            } else if (selectedEquipment) {
                url = `https://exercisedb.p.rapidapi.com/exercises/equipment/${selectedEquipment}`;
            } else if (selectedTarget) {
                url = `https://exercisedb.p.rapidapi.com/exercises/target/${selectedTarget}`;
            }

            const response = await fetch(url, options);
            const result = await response.json();
            setExercises(result);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchFilteredExercises();
    }, [selectedBodyPart, selectedEquipment, selectedTarget]);

    if (loading) {
        return (
            <MainLayout title="Exercises | MyPage">
                <div>Loading...</div>
            </MainLayout>
        );
    }

    if (error) {
        return (
            <MainLayout title="Exercises | MyPage">
                <div>Error: {error.message}</div>
            </MainLayout>
        );
    }

    return (
        <MainLayout title="Exercises | MyPage">
            <h2>Search Exercises</h2>

            {/* Dropdown Filters */}
            <div className="search-filters">
                <label>
                    Body Part:
                    <select
                        value={selectedBodyPart}
                        onChange={(e) => {
                            setSelectedBodyPart(e.target.value);
                            setSelectedEquipment("");
                            setSelectedTarget("");
                        }}
                    >
                        <option value="">All Body Parts</option>
                        {bodyPartList.map((bodyPart, index) => (
                            <option key={index} value={bodyPart}>
                                {bodyPart}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Equipment:
                    <select
                        value={selectedEquipment}
                        onChange={(e) => {
                            setSelectedEquipment(e.target.value);
                            setSelectedBodyPart("");
                            setSelectedTarget("");
                        }}
                    >
                        <option value="">All Equipment</option>
                        {equipmentList.map((equipment, index) => (
                            <option key={index} value={equipment}>
                                {equipment}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Target:
                    <select
                        value={selectedTarget}
                        onChange={(e) => {
                            setSelectedTarget(e.target.value);
                            setSelectedBodyPart("");
                            setSelectedEquipment("");
                        }}
                    >
                        <option value="">All Targets</option>
                        {targetList.map((target, index) => (
                            <option key={index} value={target}>
                                {target}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            {/* Display Filtered Exercises, consider doing a combined filter */}
            <div className="exercise-list">
                {exercises.length > 0 ? (
                    exercises.map((exercise) => (
                        <div key={exercise.id}>
                            <h3>{exercise.name}</h3>
                            <p><strong>Body Part:</strong> {exercise.bodyPart}</p>
                            <p><strong>Equipment:</strong> {exercise.equipment}</p>
                            <p><strong>Target:</strong> {exercise.target}</p>
                            <img src={exercise.gifUrl} alt={exercise.name} style={{ maxWidth: "100%", height: "auto" }} />
                        </div>
                    ))
                ) : (
                    <p>No exercises found. Try adjusting your search criteria.</p>
                )}
            </div>
        </MainLayout>
    );
};

export default Exercises;