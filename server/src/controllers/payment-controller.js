const Razorpay = require("razorpay");
const paymentModel = require("../models/payment-model");

exports.doPayment = async (req, res) => {
  const { userId, courseId, amount, currency, keyId, keySecret } = req.body;

  // initializing razorpay
  const razorpay = new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });

  // setting up options for razorpay order
  const options = {
    amount: amount * 100,
    currency: currency,
    payment_capture: 1,
  };

  try {
    const response = await razorpay.orders.create(options);

    console.log(response);

    // Save payment details to the database
    const payment = new paymentModel({
      userId,
      courseId,
      orderId: response.id,
    });

    await payment.save();

    res.json({
      order_id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    console.error(err);
    res.status(400).send("Not able to create order. Please try again!");
  }
};
