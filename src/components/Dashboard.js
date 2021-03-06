import React from 'react';
import './Dashboard.css';
import Navigation from './Navigation';
import Reviews from './Reviews';
import Rating from './Rating';
import Analysis from './Analysis';
import Visitors from './Visitors';

export default function Dashboard() {
    return (
    <div class="container">
        <div class="columns has-text-centered">
          <div class="column is-one-quarter">
            <Navigation />
          </div>
          <div class="column">
            <div class="columns same-size">
              <Reviews />
              <Rating />
              <Analysis />
            </div>
            <div class="column">
              <Visitors />
            </div>
          </div>
        </div>
    </div>
    )
}