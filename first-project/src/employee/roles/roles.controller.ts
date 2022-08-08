import { Controller, Get } from '@nestjs/common';

@Controller('roles')
export class RolesController {
  @Get()
  rolesHistory(): string {
    return '<h1>Roles history page</h1>';
  }
}
