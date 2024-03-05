import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

@Injectable()
export class AuthService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async signup(email: string, password: string): Promise<User> {
    return this.prisma.user.create({
      data: {
        email,
        password,
      },
    });
  }
}
