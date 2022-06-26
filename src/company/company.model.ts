import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface CompanyModel extends Base {}
export class CompanyModel extends TimeStamps {
  @prop({ unique: true })
  name: string;
}
