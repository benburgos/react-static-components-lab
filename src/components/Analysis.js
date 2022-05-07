import React from 'react';

export default function Analysis() {
  return (
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">Sentiment Analysis</p>
      </header>
      <div class="card-content">
        <div class="content">
          <span class="span-header-title">3,127</span>
          <br />
          <span class="span-content">Positive Reviews</span>
        </div>
        <div class="content">
          <span class="span-header-title">0</span>
          <br />
          <span class="span-content">Neutral Reviews</span>
        </div>
        <div class="content">
          <span class="span-header-title">1</span>
          <br />
          <span class="span-content">Negative Reviews</span>
        </div>
      </div>
    </div>
  );
}
