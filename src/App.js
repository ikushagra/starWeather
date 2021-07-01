import React,{Component} from 'react'
import './App.css';
import Card from './components/Card'
import { SiCloudflare } from "react-icons/si";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            country:'',
            errorData:{"cod":"404","message":"city not found"},
            weatherData:{"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":804,"main":"","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":'',"feels_like":3.83,"temp_min":'',"temp_max":'',"pressure":1000,"humidity":87},"visibility":10000,"wind":{"speed":6.69,"deg":210,"gust":12.35},"clouds":{"all":90},"dt":1615404113,"sys":{"type":1,"id":1414,"country":"","sunrise":1615357548,"sunset":1615398956},"timezone":0,"id":2643743,"name":"","cod":200}
        }

    }

    searchInput = (e) =>{
        e.preventDefault()
        this.setState({
            country: e.target.value.toUpperCase()
        })
        console.log(this.state.country)
    }

    handleSearch = (e) =>{
        e.preventDefault()
    console.log('noo')
}

    componentDidUpdate(prevProp, prevState){
        if(this.state.country !== prevState.country){
            this.handleSearch = (e) =>{
                e.preventDefault()
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.country}&units=metric&appid=bf44c1dafffa6ce5b4ea8c8674a34fe3`)
                    .then(response => response.json())
                    .then(data => this.setState({weatherData: data})
                    );
            }
        }
        console.log(this.state.weatherData)

    }


    render(){

        return(
            <div className= 'App'>
                
                <nav className="navigation"><form className='form'>
                    <div className="logo-container">  <SiCloudflare className="App-logo"/> </div>
                    <input className='input' type='text' placeholder='location'  value={this.state.country} onChange={(e) => this.searchInput(e)}/>
                    <div className='button' onClick={(e)=> this.handleSearch(e)}>Search</div>
                    </form>
                    </nav>
            <div className="App-header">
                
                <Card weatherData = {this.state.weatherData} />
            </div>
            </div>
        )
    }
}


/*
add images
add degree celcius
add min temp
add temp max
add country
add lights change 
css moon
fix wrong city
*/