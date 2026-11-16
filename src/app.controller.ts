import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post("/travel")

  postHello(): string {
    return this.appService.postHello();
  }
  @Get("/travel")
  getTravel(): { id: number; name: string; price: number }[] {
    return this.appService.findAll();
  }
  @Get("/travel/:id")
  getTravelById(@Param('id') id: number): { id: number; name: string; price: number } {
    return this.appService.findOne(id);
  }
}
