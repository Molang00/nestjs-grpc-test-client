import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HeroClientController } from './hero.client.controller';
import { HeroClientService } from './hero.client.service';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '127.0.0.1:8088',
          package: 'hero',
          protoPath: join(__dirname, 'hero.proto')
        }
      }
    ])
  ],
  controllers: [HeroClientController],
  providers: [HeroClientService],
})
export class HeroesModule {}
