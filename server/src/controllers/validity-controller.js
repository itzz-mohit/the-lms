const validityModel = require("../models/validity-model");


//get all the initial validities
exports.getValiditiesOfUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { courseId } = req.query;
    const response = await validityModel.findOne({ userId, courseId });
    console.log(response);

    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log("Error occurred while getting the validities of user");
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


//update the validities
exports.postValiditiesOfUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await validityModel.findOneAndUpdate(
      { userId },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log("Error occurred while  posting the validities of user");
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
};
