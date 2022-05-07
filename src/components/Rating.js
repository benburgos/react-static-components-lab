import React from 'react';

export default function Rating() {
  return (
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">Average Rating</p>
      </header>
      <div class="card-content">
        <div class="content">
          <span class="span-header-title">4.99</span>
          <br />
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <div class="content">
          <span class="span-content">
            <span class="highlight-red">-.01</span> from last month.
          </span>
        </div>
      </div>
    </div>
  );
}
