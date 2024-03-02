import { PureComponent } from "react";




export class GifList extends PureComponent{

state={
    gif:"",
    error: null,
    status: 'idle'
}

// // componentDidUpdate(prevProps){

//     if(prevProps.gifName !== this.props.gifName){   
//         this.setState({status: 'pending', gif: null})
//     fetch(`https://pokeapi.co/api/v2/gif/${this.props.gifName}`)
//     .then(res => {
//         if(!res.ok){
//           return  Promise.reject(new Error(`Покемона з іменем ${this.props.gifName}не знайдено`))
            
//         }
//         return res.json()
//         })
//     .then(gif=>{
//         this.setState({ gif, error:null, status:'resolved'})})
//         .catch(error => this.setState({error, status:'rejected'}))
       
       
//     }
// // }

 render(){
    const {gif, error, status}=this.state
    const gifs = this.props
   
if(status === "idle"){
    return  <p>Введіть ім'я покемона</p>
}
if(status === 'pending'){
    return <p>Loading...</p>
}
if (status === 'resolved'){
   return <div>
             <h2>{gif.name}</h2>
                <img src={gif.sprites.other['official-artwork'].front_default} alt="" />
            </div>
}
if(status === "rejected"){
    <div>{error.message  }</div>
}

return (
    <ul>

      {gifs.length || gifs.map((gif=>{
        return  <li key={gif.id}> 
            <img src={gif.images.original.url} alt="" />
         </li>
        }))}
    </ul>
)

    // return(
    //     <>{!isLoading && !gif && !error && <p>Введіть ім'я покемона</p>}
    //     {isLoading && <p>Loading...</p>}
    //     {error && <div>{error.message  }</div>}
    //     {gif && <div>
    //         <h2>{gif.name}</h2>
    //         <img src={gif.sprites.other['official-artwork'].front_default} alt="" />
    //     </div>}
    //     </>
    // )
 }
 
}