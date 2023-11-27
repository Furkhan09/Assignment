const express = require("express");
const router = express.Router();
const {
  createCompanyInfo,
  getAllCompanyInfo,
  getCompanyInfo,
  deleteCompanyInfo,
  updateCompanyInfo,
} = require("../controller/userController.js");

router.route("/").post(createCompanyInfo).get(getAllCompanyInfo);
router
  .route("/:id")
  .delete(deleteCompanyInfo)
  .patch(updateCompanyInfo)
  .get(getCompanyInfo);

module.exports = router;
