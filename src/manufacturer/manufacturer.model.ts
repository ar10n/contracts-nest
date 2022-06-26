import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface ManufacturerModel extends Base {}
export class ManufacturerModel extends TimeStamps {
  @prop({ unique: true })
  name: string;
}
