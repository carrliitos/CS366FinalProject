const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home.controller');

router.get('/', homeController.getHomePage);
router.get('/entryLevel', homeController.getEntryLevelPay);
router.get('/womenDiversity', homeController.getWomenDiversity);
router.get('/InStateOutState', homeController.getInStateOutState);
router.get('/RoomBoardUnder50000', homeController.getRoomBoardUnder50000);
router.get('/WisconsinSchools', homeController.getWisconsinSchools);
router.get('/WomenPower', homeController.getWomenPower);
/* STORED PROCEDURES */
router.post('/salary', homeController.getSalary);
router.post('/StateSchoolInformation', homeController.getStateSchoolInformation);
router.post('/StateSalary', homeController.getStateSalary);
router.post('/TuitionCost', homeController.getTuitionCost);

module.exports = router;