import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface ShipmentModel extends Base {}
export class ShipmentModel extends TimeStamps {
  @prop()
  number: string;

  @prop()
  price: number;

  @prop()
  startDate: Date;

  @prop()
  endDate?: Date;

  @prop()
  payDate?: Date;

  @prop()
  isDelivered: boolean;

  @prop()
  isPaid: boolean;
}
