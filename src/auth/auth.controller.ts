import { Controller, Request, Post, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('login')
  async login(@Request() req) {
    const email = req.body.email;
    const password = req.body.password;
    const user = await this.authService.validateUser(email, password);
    return user ? this.authService.login(user) : null;
  }

  @Post('signup')
  async signup(@Request() req) {
    return this.authService.signup(req.body.email, req.body.password);
  }
}
