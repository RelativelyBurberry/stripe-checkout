require('dotenv').config()
const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const cors = require('cors')

const app = express()
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json())

app.post('/checkout', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Starter Pack Essentinel',
          },
          unit_amount: 99,
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`,
  })

  res.json({ url: session.url })

})

app.listen(3000, () =>
  console.log('Server started on port 3000')
)
