import { Controller, Get, Post, All } from '@nestjs/common';

@Controller('roles')
export class RolesController {
  @Get()
  rolesHistory(): string {
    return '<h1>Roles history page</h1>';
  }
  @Post('demo-page')
  rolesHistoryDemo(): string {
    return 'Roles history  Demo page';
  }
  @Post('demo-page1')
  rolesHistoryDemo1(): string {
    return '<h1 style="color: red">Roles history  Demo page 1</h1>';
  }

  @Get('show')
  showMessage(): string {
    return '<h1 style="color: yellow">This page shows message in pink colour</h1>';
  }
}
