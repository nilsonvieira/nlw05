import { response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();

const settingsController = new SettingsController();


routes.post("/settings", settingsController.create);

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
