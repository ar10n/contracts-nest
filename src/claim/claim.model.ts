import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface ClaimModel extends Base {}
export class ClaimModel extends TimeStamps {
  @prop()
  title: string;

  @prop()
  description: string;

  @prop()
  startDate: Date;

  @prop()
  endDate: Date;
}
