import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { UsersController } from './users/users.controller';
import { EmployeeModule } from './employee/employee.module';
import { BlogsService } from './blogs/blogs.service';

@Module({
  imports: [EmployeeModule],
  controllers: [AppController, CatsController, UsersController],
  providers: [AppService, BlogsService],
})
export class AppModule {}
