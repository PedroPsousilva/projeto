// Importa o módulo Router do express
// Router será  utiliziado para definir rotas específicas da aplicação
const router = require('express').Router();

// Importa a controller onde contém a lógica relacionada a professores
const userController = require("../controllers/userController")
const salasController = require('../controllers/salasController');


router.post('/user', userController.createUser);
router.post('/login', userController.loginUser);
// Rotas alternativas
router.delete('/user/:cpf', userController.deleteUser);
router.get('/user', userController.getAllUsers);
router.put('/user', userController.updateUser);

router.post('/sala', salasController.createSala);
router.delete('/sala/:nome', salasController.deleteSala);
router.get('/sala', salasController.getAllSalas);
router.put('/sala', salasController.updateSala);

module.exports = router