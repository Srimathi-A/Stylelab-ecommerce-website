//import logo from './logo.svg';
import './Amount.css';
import GooglePayButton from '@google-pay/button-react';
import React from 'react';

function Amount() {
  return (
    <div className="App">
     {/* <h1><img src={logo} className='App-logo' alt="logo"/>Google Pay React Demo</h1>*/}
      
      <GooglePayButton
      environment="TEST" 
      paymentRequest={{
        apiVersion:2,
        apiVersionMinor:0,
        allowedPaymentMethods:[
          {
            type:'CARD',
            parameters:{
              allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
              allowedCardNetworks:['MASTERCARD','VISA'], 
            },
            tokenizationSpecification:{
              type:'PAYMENT_GATEWAY',
              parameters:{
                gateway:'example',
                gatewayMerchantId:'exampleGateMerchantID',
              },
            },
          },
        ],
        merchantInfo:{
          merchantId:'12345678901234567890',
          merchantName:'Demo Merchant',
        },
        transactionInfo:{
          totalPriceStatus:'FINAL',
          totalPriceLabel:'Total',
          totalPrice:'1',
          currencyCode:'USD',
          countryCode:'US',
        },
        shippingAddressRequired:true,
        callbackIntents:['PAYMENT_AUTHORIZATION'],

      }}
      onLoadPaymentData={paymentRequest=>{
        console.log('Success',paymentRequest);
      }}
      onPaymentAuthorized={paymentData=>{
        console.log('Payment Authozised Success',paymentData)
        return{transactionState:'SUCCESS'}
      }}
      existingPaymentMethodRequired='false'
      buttonColor='black'
      buttonType='Buy'
    
      
    
     />
    </div>
  );
}

export default Amount;