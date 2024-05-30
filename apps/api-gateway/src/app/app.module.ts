import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { AppService } from './app.service';
import { NatsClientModule } from '@nx-nats/nestjs-utils';

@Module({
  imports: [NatsClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
