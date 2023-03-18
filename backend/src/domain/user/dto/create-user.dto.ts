import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly linkedIn: string;

  @IsString()
  @IsNotEmpty()
  readonly gitHub: string;
}
