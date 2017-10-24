import React, {Component} from 'react';
import Item from './components/Item';
import Header from "./components/Header";

class Main extends Component {
    render() {

        var data = [
            {weather: 'sunny', name: '그린팜 · 수박', temperature: 7, wind: 0.5, humidity: 78},
            {weather: 'cloudy', name: '서영농원 · 토마토', temperature: 15, wind: 1.4, humidity: 70}
        ];

        var items = data.map( function( item, index ){
            return (
                <div className="item__list" key={index}>
                    <Item weather={item.weather}
                          name={item.name}
                          temperature={item.temperature}
                          wind={item.wind}
                          humidity={item.humidity} />
                </div>
            );
        });

        return (
            <div>
                <Header/>
                {items}
            </div>
        );
    }
}

export default Main;