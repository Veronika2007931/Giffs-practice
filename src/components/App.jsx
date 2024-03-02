import { PureComponent } from "react";
import { GifSearch } from "./Gif/GifSearch";
import { GifList } from "./Gif/GifList";

export class App extends PureComponent {
state={
  query:"",
  gifs:null
}

componentDidMount(){
  fetch('https://api.giphy.com/v1/gifs/random?api_key=4SbAqHNJAZTZ2C2wCb3cZJh6CYhOREVj&tag=&rating=g')
  .then(res=> res.json())
  .then(gifs=> this.setState({gifs: gifs.data}))
}

// onNameChange=(name)=>{
//   this.setState({
//     pokemon:name
//   })
//   console.log(name)
// }

 render(){ 
  return (
   <div>
   <GifSearch onNameChange={this.onNameChange}/>
   <GifList name={this.state.query} gifs= {this.state.gifs}/>
   </div>
  )}
};