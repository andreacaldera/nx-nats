import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NatsClient } from './nats-client';

@Module({
  providers: [NatsClient],
  imports: [
    ClientsModule.register([
      {
        name: 'NATS_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['0.0.0.0:4222'],
        },
      },
    ]),
  ],
  exports: [
    ClientsModule.register([
      {
        name: 'NATS_SERVICE',
        transport: Transport.NATS,
        options: {
          servers: ['0.0.0.0:4222'],
        },
      },
    ]),
    NatsClient,
  ],
})
export class NatsClientModule {}
