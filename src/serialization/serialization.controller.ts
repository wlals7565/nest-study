import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { CatEntity } from './entities/cat.entity';
import DogEntity from './entities/dog.entity';

// #1.2 Exclude properties
@Controller('serialization')
@UseInterceptors(ClassSerializerInterceptor)
export class SerializationController {
  // #4 Pass options
  //@SerializeOptions({ excludePrefixes: ['first'] })
  @Post()
  async getUserEntity(@Body() userEntity: UserEntity) {
    return new UserEntity(userEntity);
  }

  // #2.2 Expose properties
  @Post('/cat')
  async getCatEntity(@Body() catEntity: CatEntity) {
    return new CatEntity(catEntity.owner, catEntity.name);
  }

  // // #3.2 Transform
  @Get()
  async getDogEntity() {
    const user = new UserEntity({
      id: 1,
      firstName: 'LEE',
      lastName: 'JEONG HUN',
      password: 'test1234',
    });
    return new DogEntity('MEONG MEONG', user);
  }
}
