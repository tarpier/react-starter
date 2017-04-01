import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';

import sampleFishes from '../sample-fishes';


class App extends React.Component {
    constructor(){
        super();
        //bind addFish function to component
        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        //initial state (getinitialstate)
        this.state = {
            fishes: {},
            order: {}
        };
    }

    addFish(fish) {
        const fishes = {...this.state.fishes};
        //add in new fish
        const timestamp = Date.now();
        fishes[`fish-${timestamp}`] = fish;
        //set state
        this.setState({fishes: fishes})
    }

    loadSamples(){
        this.setState({
            fishes: sampleFishes
        });
    }

    addToOrder(key){
        //take a copy of state
        const order = {...this.state.order};
        //update or add the number of fish ordered
        order[key] = order[key] +1 || 1;
        //update state
        this.setState({order: order}); // could be written as this.setState({order})
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="list-of-fishes">
                        {
                            Object
                                .keys(this.state.fishes)
                                .map( key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
                        }
                    </ul>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
            </div>
        )
    }
}

export default App;