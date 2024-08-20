// #7.8 mapped types
import { IntersectionType } from '@nestjs/mapped-types';
import { CreateADto, CreateBDto } from './create-intersection-Type.dto';

export class UpdateCatDto extends IntersectionType(CreateADto, CreateBDto) {}
