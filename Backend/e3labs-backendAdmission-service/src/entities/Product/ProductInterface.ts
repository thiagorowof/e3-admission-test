import { IMongoModel } from '../../shared/interfaces/IMongoModel';
export interface ProductInterface extends IMongoModel {
  CODPROD: number;
  CODFAB: string;
  DESCRICAO: string;
  CODFORNEC: number;
  FORNECEDOR: string;
  EMBALAGEM: string;
  EMBALAGEMMASTER: string;
  UNIDADE: string;
  QTUNIT: number;
  QTUNITCX: number;
  CODCATEGORIA: number;
  UNIDADEMASTER: string;
  CODMARCA: number;
  MARCA: string;
  CODEPTO: number;
  CODSEC: number;
  INFORMACOESTECNICAS: string;
  CODAUXILIAR: number;
  price?: number;
  quantity?: number;
}