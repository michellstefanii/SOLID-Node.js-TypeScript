import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private CreateUserUseCase: CreateUserUseCase
    ) {}

    async handle(resquest: Request, response: Response): Promise<Response> {
        const { name, email, password } = resquest.body;
        
        try {
            await this.CreateUserUseCase.execute({
                name,
                email,
                password
            })

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}