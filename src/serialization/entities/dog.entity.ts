// #3.1 Transform
import { Transform } from 'class-transformer';
import { UserEntity } from './user.entity';

export default class DogEntity {
  @Transform(({ value }) => {
    return `${value.firstName} ${value.lastName}`;
  })
  public owner: UserEntity;
  constructor(
    public name,
    owner: UserEntity,
  ) {
    this.owner = owner;
  }
}
