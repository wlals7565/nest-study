// #7.6 mapped types
import { OmitType } from '@nestjs/mapped-types';
import { CreatePigDto } from './create-pig.dto';

export class UpdatePigDto extends OmitType(CreatePigDto, ['name'] as const) {}
