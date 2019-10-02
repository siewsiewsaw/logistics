import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {cargo} from "../entity/Cargo";

export class CargoController {

    private userRepository = getRepository(cargo);
    
    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }
    
}