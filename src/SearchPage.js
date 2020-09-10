import React from 'react'
import './SearchPage.css'
import {  Button} from '@material-ui/core';
import SearchResult from './SearchResult';


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>6ugust to 30 august 2 guest</p>
                <h1> Stay nerby</h1>
                <Button variant="outlined">Cancellation Flexiblity</Button>
                <Button variant="outlined">type of place</Button>
                <Button variant="outlined">price</Button>
                <Button variant="outlined">rooms and beds</Button>
                <Button variant="outlined">more filter</Button>
            </div>
            <SearchResult 
                img="https://media.cntraveller.in/wp-content/uploads/2020/02/Johad-Villa-Interior-866x487.jpg"
                location="jaipur INDIA"
                title="Stay at this royal room"
                description="Regency Suite King with Two-way airport transfers  –  ...
                    Private suite • 1 bedroom • 1 living room
                    1 large double bed
                    Breakfast & dinner included"
                star={4.99}
                price="₹ 20,000 / night"
                total="₹ 150,000 total"
            />
             <SearchResult 
                img="https://media.cntraveller.in/wp-content/uploads/2020/08/La-Closerie.jpg"
                location="Pondicherry INDIA"
                title="Stay at this royal room"
                description="Regency Suite King with Two-way airport transfers  –  ...
                    Private suite • 1 bedroom • 1 living room
                    1 large double bed
                    Breakfast & dinner included"
                star={3.3}
                price="₹ 4,500, / night"
                total="₹ 15,000 total"
            />
            <SearchResult 
                img="https://media.cntraveller.in/wp-content/uploads/2020/08/Villa-du-OCean.jpg"
                location="Pondicherry INDIA"
                title="Stay at this royal room"
                description="Regency Suite King with Two-way airport transfers  –  ...
                    Private suite • 1 bedroom • 1 living room
                    1 large double bed
                    Breakfast & dinner included"
                star={4.23}
                price="₹ 3,500, / night"
                total="₹ 10,000 total"
            />
             <SearchResult 
                img="https://media.cntraveller.in/wp-content/uploads/2014/02/taj-lands-end-mumbai-866x487.jpg"
                location="Mumbai INDIA"
                title="Stay at this royal room"
                description="Regency Suite King with Two-way airport transfers  –  ...
                    Private suite • 1 bedroom • 1 living room
                    1 large double bed
                    Breakfast & dinner included"
                star={4.8}
                price="₹ 10,500, / night"
                total="₹ 25,000 total"
            />
             <SearchResult 
                img="https://media.cntraveller.in/wp-content/uploads/2017/01/6stregismumbai.jpg"
                location="Mumbai INDIA"
                title="St Regis, Mumbai"
                description="Regency Suite King with Two-way airport transfers  –  ...
                    Private suite • 1 bedroom • 1 living room
                    1 large double bed
                    Breakfast & dinner included"
                star={4.6}
                price="₹ 10,000, / night"
                total="₹ 24,000 total"
            />
        </div>
    )
}

export default SearchPage
