const User = require("../model/userModel.js");

const createCompanyInfo = async (req, res) => {
  const { companyName, contactNumber, email } = req.body;
  if (!companyName || !contactNumber || !email) {
    res.status(404).json({ message: "Please provide all values" });
  }
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

const getAllCompanyInfo = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getCompanyInfo = async (req, res) => {
  try {
    const { id: companyId } = req.params;
    const user = await User.findOne({ _id: companyId });
    if (!user)
      return res.status(404).json({ msg: `no company with id : ${companyId}` });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteCompanyInfo = async (req, res) => {
  try {
    const { id: companyId } = req.params;
    const company = await User.findOneAndDelete({ _id: companyId });
    if (!company)
      return res.status(404).json({ msg: `no company with id : ${companyId}` });
    res.status(200).json({ company });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateCompanyInfo = async (req, res) => {
  try {
    const { id: companyId } = req.params;
    const company = await User.findOneAndUpdate({ _id: companyId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!company)
      return res.status(404).json({ msg: `no company with id : ${companyId}` });
    res.status(200).json({ company });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
module.exports = {
  createCompanyInfo,
  getAllCompanyInfo,
  getCompanyInfo,
  deleteCompanyInfo,
  updateCompanyInfo,
};
