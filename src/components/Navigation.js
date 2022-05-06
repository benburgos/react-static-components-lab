import React from 'react';

export default function Navigation() {
    return (
        <div class="column">
            <article class="panel is-info">
                    <p class="panel-heading">
                        Navigation
                    </p>
                    <a class="panel-block is-active">
                        <span class="panel-icon">
                        <i class="fa-solid fa-table-columns"></i>
                        </span>
                        Dashboard
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon">
                        <i class="fa-solid fa-wrench"></i>
                        </span>
                        Widget
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon">
                        <i class="fa-solid fa-book-open"></i>
                        </span>
                        Reviews
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon">
                        <i class="fa-solid fa-people-group"></i>
                        </span>
                        Customers
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon">
                        <i class="fa-solid fa-chart-pie"></i>
                        </span>
                        Online Analysis
                    </a>
                    <a class="panel-block">
                        <span class="panel-icon">
                        <i class="fa-solid fa-gear"></i>
                        </span>
                        Settings
                    </a>
                </article>
          </div>
    )
}