import React from "react";
import './App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Cards = () => {
    return (
        <CardGroup >
            <Card>
                <div className="card1">
                    <Card.Img className="card101" variant="top" src={require('./assets/dynexx.jpg')} /></div>
            </Card>
            <Card>
                <div className="card1">
                    <Card.Img className="card201" variant="top" src={require('./assets/ceaT222.jpg')} /></div>
            </Card>    
            <Card>
                <div className="card1">
                    <Card.Img className="card301" variant="top" src={require('./assets/volvoline2.jpg')} /></div>
            </Card>
        </CardGroup>
    );
}

export default Cards;