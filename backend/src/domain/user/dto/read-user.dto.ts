import { IsNotEmpty, IsString } from 'class-validator';

export class ReadUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
