// #2.4 Auto Validation
import { IsNumberString } from 'class-validator';

export default class NumberParam {
  @IsNumberString()
  id: number;
}
