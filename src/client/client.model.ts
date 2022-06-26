import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface ClientModel extends Base {}
export class ClientModel extends TimeStamps {
  @prop()
  name: string;

  @prop({ unique: true })
  individualNumber: string;

  @prop()
  phone?: string;

  @prop()
  email?: string;

  @prop()
  comment?: string;
}
