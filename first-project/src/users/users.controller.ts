import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  userInfor(): number {
    let x: number = 10;
    let y: number = 20;
    return x * y;
  }
}
