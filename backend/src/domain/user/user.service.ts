import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@/shared/entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneById(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async findOneByName(name: string): Promise<User> {
    return this.userRepository.findOne({ where: { name } });
  }

  async create(userDTO: CreateUserDto) {
    const user = await this.findOneByName(userDTO.name);
    if (user) {
      throw new ForbiddenException(
        `User with name ${userDTO.name} already exists`,
      );
    }
    return this.userRepository.save(userDTO);
  }
}
