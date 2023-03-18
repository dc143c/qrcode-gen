import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ReadUserDto } from './dto/read-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userDTO: CreateUserDto) {
    return this.userService.create(userDTO);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Post('/find')
  async findUser(@Body() userDTO: ReadUserDto) {
    return this.userService.findOneByName(userDTO.name);
  }
}
