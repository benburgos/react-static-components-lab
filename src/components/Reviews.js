import React from 'react';

export default function Reviews() {
    return (
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                Reviews
                </p>
            </header>
            <div class="card-content">
                <span class="span-header-title">3,128</span>
                <div class="content">
                <span class="span-content">You received <span class="highlight-red">-2.8% less</span> reviews than last month. Keep trying!</span>
                </div>
                <div class="content">
                <span class="span-content">3,127 Positive Reviews | 1 Negative Review</span>
                </div>
            </div>
        </div>
    )
}