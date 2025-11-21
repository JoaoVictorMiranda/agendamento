import userController from '../controllers/userController.js'


export default function configurarRotas(api) {
    api.use(userController);
}