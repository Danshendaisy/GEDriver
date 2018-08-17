import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  state ={
    orders:[]
  }

  componentDidMount(){
    axios.get(`/driverOrders`,{
      headers: {'Access-Control-Allow-Origin': '*' },
       crossdomain: true,
      
      })
    .then(res => {
      console.log(res)
      const orders= res.data.order
      this.setState({orders})
      console.log(orders)
    })
  }

  render() {
    return (
      <div>
       <h3>Order Information</h3>
        <div style={{marginLeft: 10, alignItems:'flex-start', justifyContent:'center'}}>
          {this.state.orders.map(order =>
            <p style={{fontWeight:'bold'}}>Name: {order.userName}, 
            phone: {order.phone}, address:{order.address}
            <ul>
              {order.items.map(item=>
              <li>{item.name} {item.count}</li>)}
          </ul>
          </p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
