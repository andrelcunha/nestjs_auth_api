import { Controller, Request, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Request() req) {
    const email = req.body.email;
    const password = req.body.password;
    return this.authService.validateUser(email, password);
  }

  @Post('signup')
  async signup(@Request() req) {
    return this.authService.signup(req.body.email, req.body.password);
  }
}
