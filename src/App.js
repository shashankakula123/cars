
import React from 'react';
import ImageList from './components/ImageList'
import unsplash from './api/unsplash';
import './App.css';
import SearchBar from './components/SearchBar';
class App extends React.Component {
state={
  images:[],
}
    onSearch=async term=>{
   const response=await unsplash.get('/search/photos',{
      params:{query:term},
    
    })
    this.setState({images:response.data.results});
  }
  render(){
  return (
    <div className="ui container">
     <h1>cars</h1>
     <SearchBar onSubmit={this.onSearch}/>
<div>
     <ImageList images={this.state.images}/>
     </div>
    </div>
  )
}
}

export default App;
