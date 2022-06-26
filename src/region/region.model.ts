import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface RegionModel extends Base {}

export class RegionModel extends TimeStamps {
  @prop({ unique: true })
  name: string;
}
