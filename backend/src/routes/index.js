import userController from '../controllers/userController.js'
import adminController from '../controllers/adminController.js'
import servicesController from '../controllers/servicesController.js'
import agendamentoController from '../controllers/agendamentoController.js'

export default function configurarRotas(api) {
    api.use(userController);
    api.use(adminController);
    api.use(servicesController);
    api.use(agendamentoController);
}