import React, { Component } from 'react';

import Header from '../components/Header/Header';
import CityList from '../components/CityList/CityList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: []
    }
  }
  render() {
    const { city } = this.state;
    const action = {
      onSearch: this.props.onSearch
    };

    return <section className="homePage">
        <Header onSearch={action.onSearch} />
        <div className="cityLists">
          <CityList city={city}/>
        </div>
      </section>;
  }
}

export default Home;
