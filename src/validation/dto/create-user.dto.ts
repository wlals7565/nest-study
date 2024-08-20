// #2.2 Auto Validation
import { IsNumber, IsString } from 'class-validator';

export default class CreateUserDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;
}
