import {
  Body,
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import CreateUserDto from './dto/create-user.dto';
import NumberParam from './dto/number-param.dto';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('validation')
export class ValidationController {
  // #2.3 Auto Validation
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return 'test for Validation';
  }

  // #2.5 Auto Validation
  @Get(':id')
  findOne(@Param('id') numberParam: NumberParam) {
    return 'test for Validation';
  }
  // #6 Explicit conversion
  @Get('/explicitConversion/:id')
  findOneWithSortOption(
    @Param('id', ParseIntPipe) id: number,
    @Query('sort', ParseBoolPipe) sort: boolean,
  ) {
    console.log(typeof id === 'number');
    console.log(typeof sort === 'boolean');
    return 'This action returns a user';
  }

  // #8.1 parsing and validating arrays
  @Post('/arr')
  createBulk(
    @Body(new ParseArrayPipe({ items: CreateCatDto }))
    createCatDtos: CreateCatDto[],
  ) {
    return 'right validation for array';
  }

  // #8.2 parsing and validating arrays
  @Get()
  findByIds(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: number[],
  ) {
    return 'make query string into array and validate it';
  }
}
