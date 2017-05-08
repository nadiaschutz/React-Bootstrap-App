import React, { Component } from 'react';
import axios from 'axios';

class Replicon extends Component {

    componentWillMount() {
        this.getReplicon();
    }

    getReplicon() {
        axios.get(`https://api.spreaker.com/v2/shows/1443546/episodes?filter=listenable&last_id=8589057&limit=5`)
        .then(res => {
            const episodes = res.data.response.items;
            this.setState({episodes});
            const next = res.data.response.next_url;
            this.setState({next});
        })
        .catch(e => {
            this.setState({message: e});
            console.log(e);
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            episodes: [],
            nextEpisodes: '',

            message: ''
        };
        this.getReplicon = this.getReplicon.bind(this);
     }

     render() {
       return (
           <div>
               <div className="container">
                   {this.state.episodes.map(episode =>
                        <div key={episode.episode_id}>
                            {episode.title}
                            {episode.site_url}
                            {episode.image_url}
                            {episode.image_original_url}
                            {episode.published_at}
                            {episode.waveform_url}
                        </div>
                    )}
                   {this.state.next}
               </div>
           </div>
       );
   }
}

export default Replicon;
