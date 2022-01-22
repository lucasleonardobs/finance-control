import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'; 

import { App } from './App';


createServer({
  routes() {
    this.namespace = "api";

    this.get('transactions', () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          type: "Deposit",
          category: "Food",
          value: "R$ 25,00"
        }
      ]
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
