import {
  Controller,
  Get,
  Post,
  All,
  Body,
  Param,
  HttpCode,
  Query,
} from '@nestjs/common';

import { BlogsService } from '../blogs/blogs.service';
@Controller('users')
export class UsersController {
  constructor(private blogsService: BlogsService) {}
  @Get()
  userInfo(): number {
    let x: number = 10;
    let y: number = 20;
    return x * y;
  }
  // Get
  @Get('history-page')
  userHistory(): object {
    return { id: 1, text: 'hii' };
  }
  // post
  @Post('add-user')
  adduser(): string {
    return 'Add suer Data';
  }

  // All
  @All('display-user')
  displayUser(@Body() record: string): string {
    console.log(record);
    return 'Display User details';
  }

  // Dynamic ID
  @Get('list-id/:id')
  @HttpCode(204)
  getList(@Param() record: any): string {
    // console.log(record);
    return 'List user = ' + record.id;
  }

  @Get('list/:id')
  @HttpCode(405)
  item(@Param() record: any) {
    return 'userData' + record.id;
  }

  @Get('listFilter')
  listFilter(@Query() record) {
    console.log(record);
    return record;
  }
  // http://localhost:3000/users/details44no
  @Post('details*no')
  detailPage(): string {
    console.log('detail');
    return 'details';
  }

  // services for blogs
  @Get('blog-list')
  blogList() {
    return this.blogsService.findData();
  }

  @Post('blog-add')
  blogAdd(@Body() record: any) {
    this.blogsService.create(record);
    return record;
  }
  @Get('blog-del')
  Delete(@Body() record: any) {
    this.blogsService.deleteData();
  }

  // @Post('blog-update')
  // blogUpdate(@Body() record: any): any {
  //   this.blogsService.updateData(record);
  // }
}
