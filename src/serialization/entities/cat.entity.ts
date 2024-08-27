// #2.1 Expose properties
import { Expose } from 'class-transformer';

export class CatEntity {
  constructor(
    public owner: string,
    public name: string,
  ) {}

  @Expose()
  get intro() {
    return `${this.owner}'s ${this.name} cat`;
  }
}
