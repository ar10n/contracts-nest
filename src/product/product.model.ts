import { prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ManufacturerModel } from '../manufacturer/manufacturer.model';

export interface ProductModel extends Base {}
export class ProductModel extends TimeStamps {
  @prop()
  name: string;

  @prop({ ref: () => ManufacturerModel })
  manufacturer: Ref<ManufacturerModel>;
}
