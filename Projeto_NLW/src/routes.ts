import { response, Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();


routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);

export { routes };

/*
* Tipos de Parametros
* Routes Params => Parametros de Rotas
* http://localhost:3333/settings/1
* Query Params => Filtros e Buscas
* http://localhost:3333/settings/1?search=algumacoisa
* Body Params => {
*    Objetos
}
*/
