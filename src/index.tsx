import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'; 

import { App } from './App';


createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de Aplicativo',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 6000,
          createdAt: new Date('2022-01-27 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel de apartamento',
          type: 'withdraw',
          category: 'Casa',
          amount: 1500,
          createdAt: new Date('2022-01-27 09:00:00')
        },
        {
          id: 3,
          title: 'Geladeira',
          type: 'withdraw',
          category: 'Casa',
          amount: 3500,
          createdAt: new Date('2022-01-27 09:00:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = "api";

    this.get('transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data)
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
