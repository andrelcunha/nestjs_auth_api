import { NestFactory } from '@nestjs/core';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module';
import { config } from './config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const host = config.HOST || 'localhost';
  const port = config.PORT ? +config.PORT : 3000;

  await app.listen(port, host, (err) => {
    console.log(`Server is running on http://${host}:${port}`);
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
}
bootstrap();
