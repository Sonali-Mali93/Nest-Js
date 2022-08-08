import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller.userInfo()).toBe(100);
  });
});

// describe('root', () => {
//   it('should return "Hello World!"', () => {
//     expect(appController.getHello()).toBe('Hello World!');
//   });
// });
