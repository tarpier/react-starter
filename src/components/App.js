import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';


class App extends React.Component {
    constructor(){
        super();
        //bin addFish function to component
        this.addFish = this.addFish.bind(this);
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

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;