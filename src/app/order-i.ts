import { ItemDetailsI } from './item-details-i';

export interface OrderI {
  customerId: number;
  oneItem: ItemDetailsI[];
}
