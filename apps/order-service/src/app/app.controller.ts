import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}
  @EventPattern('createPayment')
  async createPayment(@Payload() payload: strign) {
    return 'from order service';
  }
}
