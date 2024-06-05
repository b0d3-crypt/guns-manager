import { JwtModuleOptions } from '@nestjs/jwt';

export const JwtConfig: JwtModuleOptions = {
    secret: 'hU5#E!2@p&6oB$9aZ*8qYsXrVtU3iW+mN',
    signOptions: { expiresIn: '1h'}
}