var express = require('express');
var router = express.Router();

//Controlador
var quizController = require('../controllers/quiz_controller');
var creditosController = require('../controllers/autores_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question',quizController.question);
router.get('/quizes/answer',quizController.answer);
router.get('/creditos/autores',creditosController.autores);

module.exports = router;
