const express = require('express');
const app = express();
const router = express.Router();
const {createTicket , queryTicket, TicketById , searchTicket} = require('../controller/ticketController');
const {authToken} = require('../middleware/authorization')

router.post('/tickets/new', authToken,createTicket);

router.get('/ticket/' , authToken, queryTicket);

router.get('/ticket/:id' , authToken, TicketById)

router.get('/ticket/:word', authToken, searchTicket)


module.exports = router