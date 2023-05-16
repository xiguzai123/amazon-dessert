export class MjjlRow {
  图片: string;
  商品: string;
  ASIN: string;
  PASIN: string;
  SKU: string;
  URL: {
    text: string;
  };
  商品主图: {
    text: string;
  };
  品牌: string;
  商品标题: string;
  亚马逊标识: string;
  类目路径: string;
  大类目: string;
  大类BSR: string;
  小类目: string;
  小类BSR: number;
  近30天销量: number;
  '价格($)': number;
  毛利率: string;
  'FBA($)': string;
  评分: number;
  评分数: number;
  留评率: string;
  '月新增\n评分数': number;
  'Q&A数': number;
  评级: string;
  上架时间: string;
  上架天数: number;
  变体数: number;
  卖家数: number;
  Buybox卖家: string;
  卖家所属地: string;
  卖家信息: string;
  配送方式: string;
  重量: string;
  体积: string;
  extends: {
    isNewProduct: 1 | 0;
  };
  constructor() {
    this.图片 = '';
    this.商品 = '';
    this.ASIN = '';
    this.PASIN = '';
    this.SKU = '';
    this.URL = {
      text: '',
    };
    this.商品主图 = {
      text: '',
    };
    this.品牌 = '';
    this.商品标题 = '';
    this.亚马逊标识 = '';
    this.类目路径 = '';
    this.大类目 = '';
    this.大类BSR = '';
    this.小类目 = '';
    this.小类BSR = 0;
    this.近30天销量 = 0;
    this.毛利率 = '';
    this.评分 = 0;
    this.评分数 = 0;
    this.留评率 = '';
    this['月新增\n评分数'] = 0;
    this['Q&A数'] = 0;
    this.评级 = '';
    this.上架时间 = '';
    this.上架天数 = 0;
    this.变体数 = 0;
    this.卖家数 = 0;
    this.Buybox卖家 = '';
    this.卖家所属地 = '';
    this.卖家信息 = '';
    this.配送方式 = '';
    this.重量 = '';
    this.体积 = '';
    this.extends = {
      isNewProduct: 0,
    };
  }
}

export class MjjlData {
  columns: string[];
  indexColumns: Map<number, string>;
  totalSalesCount: number;
  totalSalesAmount: number;
  data: MjjlRow[];
  source: any[];
  constructor() {
    this.columns = [];
    this.indexColumns = new Map();
    this.totalSalesCount = 0;
    this.totalSalesAmount = 0;
    this.source = [];
    this.data = [];
  }
}

const impl = new MjjlData();

console.log(impl.columns);
