import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  userInfo(): number {
    let x: number = 10;
    let y: number = 20;
    return x * y;
  }

  @Get('history-page')
  userHistory(): object {
    return { id: 1, text: 'hii' };
  }
}


