import React from 'react'
import './Home.css';
import Banner from './Banner';
import Card from './Card'

function Home() {
    return (
        <div className="home">
           
            <Banner/>

            <div className="home__section">
                <Card
                    src="https://media.cntraveller.in/wp-content/uploads/2020/09/Tamara-Kodai-1366x768.jpg" 
                    title="rewada hotel"
                    description="unique activities"

                 />
                <Card 
                    src="https://media.cntraveller.in/wp-content/uploads/2020/09/Radisson.jpg"
                    title="Radisson Blu Resort Temple Bay Mamallapuram "
                    description="Sprawled over 44 acres, this stunning property features a meandering pool tipping into the Bay of Bengal."
                />
                <Card 
                    src="https://media.cntraveller.in/wp-content/uploads/2020/09/chariot-beach-resort.jpg"
                    title="Chariot Beach Resort, Mahabalipuram"
                    description="This resort is the perfect isolation spot. With a pristine private beach and independent cottages, there’s a low chance of running into other guests at the resort."

                />
            </div>
            <div className="home__section">
                <Card 
                    src="https://media.cntraveller.in/wp-content/uploads/2020/09/Tamara-Kodai-.jpg"
                    title="The Tamara Kodai"
                    description="Nestled in the hills of Kodaikanal, The Tamara is a luxurious colonial bungalow that was a monastic retreat for priests back in the 1860s"
                />
                <Card
                    src="https://media.cntraveller.in/wp-content/uploads/2020/09/Sterling-Kodai.jpg"
                    title="Sterling Kodai Lake"
                    description="Nestled in the hills and set along the Kodaikanal lake, this resort provides all the respite you need after being confined at home for months. "
                 />
                <Card 
                    src="https://media.cntraveller.in/wp-content/uploads/2020/09/grande-Bay-resort.jpg"
                    title="Grande Bay Resort and Spa, Mamallapuram"
                    description="A stone’s throw away from Mahabalipuram Beach, Grand Bay Resort and Spa is just the place you’d want to be after spending months in lockdown. "

                />
            </div>
        </div>
    )
}

export default Home
