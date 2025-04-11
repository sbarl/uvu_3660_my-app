// About.jsx
import React from "react";
import MainLayout from "./layouts/MainLayout";

const About = () => {
    return (
        <MainLayout title="About Us | Chew Chew Train">
            <div className="container mt-4">
                <h2>About Chew Chew Train</h2>
                <p>
                    Welcome to Chew Chew Train, the fitness app that combines
                    personalized workout tracking and nutrition guidance to help
                    you achieve your fitness goals. Whether you're aiming to lose
                    weight, build muscle, or improve your endurance, we've got you covered!
                </p>
                <p>
                    Our app offers a variety of features, including:
                </p>
                <ul>
                    <li>Workout logging for strength training, running, and more.</li>
                    <li>Track your fitness progress with detailed reports.</li>
                    <li>Set personalized fitness and nutrition goals.</li>
                    <li>Connect with a supportive community of users.</li>
                </ul>
                <p>
                    Join us on this journey, and let's get stronger together!
                    No matter where you are in your fitness journey, Chew Chew Train is here to help.
                </p>
            </div>
        </MainLayout>
    );
};

export default About;
