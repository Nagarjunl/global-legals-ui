import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store, persistor } from './app/store'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from '@stripe/stripe-js';
// const stripePromise = await loadStripe('pk_test_51OWvGSSDcWKAz6oIiMvnjQToKrOu7Pp4aHIKugWHpMTx4K19CajJQDPkx9RnQutL2QxS7cTPIL2yPfRrDefNZig600U6nDGFWZ');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <Elements stripe={stripePromise}> */}
        <App />
        {/* </Elements> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
