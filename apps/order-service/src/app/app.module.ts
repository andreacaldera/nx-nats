import { Module } from '@nestjs/common';

import { OrderController } from './order.controller';
import { AppService } from './app.service';

import { NatsClientModule } from '@nx-nats/nestjs-utils';

@Module({
  imports: [NatsClientModule],
  controllers: [OrderController],
  providers: [AppService],
})
export class AppModule {}
