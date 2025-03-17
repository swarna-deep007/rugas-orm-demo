import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PaypalButton = ({ amount, onSuccess, onError }) => {
    return (
        <PayPalScriptProvider
            options={{
                "client-id": "Ad19zkjpN2RjxP0b7inF7OQFGHpSGlm8lj83w1Wr1-eG5RJtQHgEqirGhWp0W4V5PkXnGCMBsnbmEpJ4", // PayPal Client ID
                currency: "USD",
            }}
        >
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{ amount: { currency_code: "USD", value: amount } }],
                    });
                }}
                onApprove={async (data, actions) => {
                    try {
                        const order = await actions.order.capture();
                        console.log("Payment Successful:", order);
                        onSuccess(order);
                    } catch (error) {
                        console.error("Capture Error:", error);
                        onError(error);
                    }
                }}
                onError={(err) => {
                    console.error("Payment Error:", err);
                    alert("Payment failed: " + err.message);
                }}
            />

        </PayPalScriptProvider>
    );
};

export default PaypalButton;
