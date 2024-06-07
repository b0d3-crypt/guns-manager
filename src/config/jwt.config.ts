import { JwtModuleOptions } from '@nestjs/jwt';

export const JwtConfig: JwtModuleOptions = {
    global: true,
    secret: "L5z$#9r2Zs#^j!pE7*Qc8&5uFy@K6tG3",
    signOptions: { expiresIn: '1H' }
}