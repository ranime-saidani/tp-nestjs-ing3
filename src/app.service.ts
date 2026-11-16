import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postHello(): string {
    return 'Planifier un nouveau voyage ici';
  }

  findAll(): { id: number; name: string; price: number }[] {
    return [
      { id: 1, name: 'To china', price: 9000 },
      { id: 2, name: 'To Morocco', price: 4000 },
    ];
  }
  findOne(id: number): { id: number; name: string; price: number } {
    return { id, name: 'To china', price: 9000 };
  }



}

