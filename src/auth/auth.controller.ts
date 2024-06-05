import { Body, Controller, Post } from "@nestjs/common";
import { AuthDTO } from "src/dtos/auth.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(
        private _authService: AuthService
    ){}

    @Post()
    async login(@Body() authDTO: AuthDTO) {
        return await this._authService.login(authDTO)
    }
}