import React, { Component } from 'react';
import About from '../components/About';
import Features from '../components/Features';
import Tours from '../components/Tours';
import Stories from '../components/Stories';
import Booking from '../components/Booking';

class Main extends Component {
    render() {
        return (
            <main>
                <About/>
                <Features/>
                <Tours/>
                <Stories/>
                <Booking/>
            </main>
        );
    }
}

export default Main;