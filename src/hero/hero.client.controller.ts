import { Controller, Get, Param, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HeroClientService } from './hero.client.service';

@Controller('/hero-client/v1')
export class HeroClientController {
  constructor(private readonly heroClientService: HeroClientService) {}

  @Get('/heroes/:id')
  getHero(@Param('id') id: number): Observable<any> {
    return this.heroClientService.getHero(id);
  }
}
