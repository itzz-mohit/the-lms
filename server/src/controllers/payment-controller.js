const Razorpay = require("razorpay");
const paymentModel = require("../models/payment-model");
const validityModel = require("../models/validity-model");

// do payment
exports.doPayment = async (req, res) => {
  const { amount, currency, keyId, keySecret, userId, courseId } = req.body;

  const existingEnrollment = await paymentModel.findOne({ userId, courseId });
  if (existingEnrollment) {
    return res
      .status(400)
      .json({
        success: false,
        message: "You are already enrolled in this course",
      });
  }

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

    //console.log(response);

    // Save payment details to the database
    // const payment = new paymentModel({
    //   userId,
    //   courseId,
    //   orderId: response.id,
    // });

    // await payment.save();

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

//save payment data
exports.savePaymentData = async (req, res) => {
  try {
    const { userId, courseId, orderId } = req.body;
    const response = await paymentModel.create({ userId, courseId, orderId });
    // console.log(response);
    // console.log(response.success);
    //res.status(200).json({ success: true, data: response });
    if (response) {
      try {
        const validity = await validityModel.create({ userId, courseId });
        res
          .status(200)
          .json({ success: true, data: response, validityData: validity });
      } catch (err) {
        console.error(err);
        res.status(400).send("Unable to set the course validity");
      }
    }
  } catch (err) {
    console.error(err);
    res.status(400).send("Payment data not saved");
  }
};

