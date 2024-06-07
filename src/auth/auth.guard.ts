import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private _jwtService: JwtService
    ){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers['authorization'];
    
        if (!authHeader) {
            return false;
        }
    
        try {
            const decoded = this._jwtService.verify(authHeader);
            request.user = decoded;
            return true;
        } catch (error) {
            return false;
        }
    }
}