export type ChartProps = {
  data: any[]
}

export type GroupChartProps = {
  metadata: any[],
  sortKey: string,
  groupKey: string,
  countKey: string,
  rankKey: string,
  option: {
    title: string,
    xAxisName: string,
    yAxisItemNames: string[],
    legendData: any[],
    bar: {
      name: string,
      x: string,
      y: string
    },
    line: {
      name: string,
      x: string,
      y: string
    },
    tooltipFormatter: any
  }
}

export type ChartData = {
  salesRange?: string
  productCount?: number
  salesRatio?: number
  salesCount?: number,
  productCountRatio?: number,
  salesAmt?: number,
  salesAmtRatio?: number,
  sellerName?: string,
  list?: any[]
}

export type Range = {
  min: number
  max?: number,
  title?: string
}

export const salesCountColumnChartProps = () => {
  return {
    countKey: '近30天销量',
    rankKey: 'salesRanking',
    option: {
      title: '商品销量集中度',
      xAxisName: '销量排名',
      yAxisItemNames: ['销量', '销量占比']
    },
  }
}

export type GroupChartData = {
  group?: string,
  ranking?: number
  salesCount?: number
  salesCountRatio?: number
  salesAmt?: number
  salesAmtRatio?: number
  newProductCount?: number
  productCount?: number,
  unNewProductCount?: number,
  unNewProductSalesCount?: number,
  newProductSalesCount?: number,
  newProductSalesCountRatio?: number,
  unNewProductSalesCountRatio?: number,
  unNewProductSalesAmt?: number,
  newProductSalesAmt?: number,
  newProductSalesAmtRatio?: number,
  unNewProductSalesAmtRatio?: number,
  newProduct?: number,
  list?: any[],
  data?: any
}
