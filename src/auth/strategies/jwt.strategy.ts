import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from "../auth.service";
import { JwtPayload } from "../interfaces/jwt-payload.interface";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly _authService: AuthService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'hU5#E!2@p&6oB$9aZ*8qYsXrVtU3iW+mN'
        });
    }

    async validate(payload: JwtPayload) {
        const user = await this._authService.validateUser(payload);
        if (!user) {
            throw new UnauthorizedException();
        }   
        return user;
    }
}