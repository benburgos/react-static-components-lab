import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="columns has-text-centered">
          <div class="column">
            <p class="bd-notification is-info">First column</p>
          </div>
          <div class="column">
            <div class="columns">
              <div class="column is-one-third">
                <p class="bd-notification is-danger">Reviews</p>
              </div>
              <div class="column">
                <p class="bd-notification is-danger">Average Rating</p>
              </div>
              <div class="column">
                <p class="bd-notification is-danger">Sentiment-Analysis</p>
              </div>
            </div>
            <div class="columns is-mobile">
              <div class="column">
                <p class="bd-notification is-danger">Website Visitors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
