import { Injectable, Logger } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientOptions, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  client: ClientProxy;
  logger = new Logger("Main")

  constructor() {
    const microserviceOptions: ClientOptions = {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 5000
      }
    }

    this.client = ClientProxyFactory.create(microserviceOptions);
  }

  getHello(): string {
    return 'Hello World!';
  }

  sum(data: number[]) {
    this.logger.log(data);
    this.logger.log(data);
    this.client
      .send({cmd: 'sum'},[data])
      .subscribe(async (result) => { this.logger.log("hi", result)})
  }
}
