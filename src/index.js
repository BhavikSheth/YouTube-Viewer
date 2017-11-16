import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBeBn1AyqgW-JF5xSGj-MYSYR_3tSEjUNE';

class App extends Component {
  constructor(props) {
  	super(props);

    this.state = {
      videos: [],
      selectedVideo: null
		}
		
		// this.videoSearch('surfboards');
	}
	
	videoSearch(term) {
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
		});
	}

	render() {
		return (
			<div>
				
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));