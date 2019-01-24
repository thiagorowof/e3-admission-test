import { IMongoModel } from '../../shared/interfaces/IMongoModel';
export interface StockInterface extends IMongoModel {
  CODFILIAL: string;
  CODPROD: number;
  QTESTGER: number;
  QTBLOQUEADA: number;
  QTRESERV: number;
  QTDISPONIVEL: number;
  QTPENDENTE: number;
  CUSTOFIN: number;
  DTULTENT: string;
}