import { prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { ClaimModel } from '../claim/claim.model';
import { ClientModel } from '../client/client.model';
import { CompanyModel } from '../company/company.model';
import { ProductModel } from '../product/product.model';
import { RegionModel } from '../region/region.model';
import { ShipmentModel } from '../shipment/shipment.model';

export interface ContractModel extends Base {}
export class ContractModel extends TimeStamps {
  @prop()
  number: string;

  @prop()
  noticeNumber?: string;

  @prop()
  startDate: Date;

  @prop()
  endDate?: Date;

  @prop()
  price: number;

  @prop()
  daysToDeliver: number;

  @prop()
  daysToPay: number;

  @prop()
  isDone: boolean;

  @prop({ ref: () => ClientModel })
  client: Ref<ClientModel>;

  @prop({ ref: () => CompanyModel })
  company: Ref<CompanyModel>;

  @prop({ ref: () => ProductModel })
  products: Ref<ProductModel>[];

  @prop({ ref: () => RegionModel })
  region: Ref<RegionModel>;

  @prop({ ref: () => ShipmentModel })
  shipments?: Ref<ShipmentModel>[];

  @prop({ ref: () => ClaimModel })
  claims?: Ref<ClaimModel>[];
}
