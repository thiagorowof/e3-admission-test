import { IMongoModel } from '../../shared/interfaces/IMongoModel';
export interface PriceInterface extends IMongoModel {
  CODPROD: number;
  NUMREGIAO: number;
  PVENDA: number;
  DTULTALTPVENDA: string;
}