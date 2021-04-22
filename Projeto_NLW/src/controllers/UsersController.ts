import { Request, Response} from "express"
import { User } from "../entities/User";
import { UserService } from "../services/UserService";


class UsersController {
  async create(request: Request, response: Response): Promise<Response>{
    const {email} = request.body;
    const usersService = new UserService();

  await usersService.create(email);
  return response.json(User);
  }
}

export {UsersController};