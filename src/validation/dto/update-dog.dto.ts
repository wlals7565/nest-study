// # 7.4 mapped types
import { PickType } from '@nestjs/mapped-types';
import { CreateDogDto } from './create-dog.dto';

export class UpdateCatAgeDto extends PickType(CreateDogDto, ['age'] as const) {}
