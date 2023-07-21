

// -- GPAY -------------------------------------------------------------------
// allowed user payment methods 💰
export const paymentMethods = () => [{
            type: 'CARD',
            parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['AMEX', 'DISCOVER', 'INTERAC', 'JCB', 'MASTERCARD', 'VISA']
            },
            tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                    'gateway': 'stripe',
                    'stripe:version': '2019-03-14',
                    'stripe:publishableKey': '<YOUR_PUBLIC_STRIPE_KEY>'
                }
            }
        },
        {
            type: 'PAYPAL',
            parameters: {
                'purchase_context': {
                    'purchase_units': [{
                        'payee': {
                            'merchant_id': '<YOUR PAYPAL_ACCOUNT_ID>'
                        }
                    }]
                }
            },
            tokenizationSpecification: {
                type: 'DIRECT'
            }
        }
    ]

export const loadPaymentDataHandler = paymentData => paymentData.paymentMethodData.tokenizationData.token

