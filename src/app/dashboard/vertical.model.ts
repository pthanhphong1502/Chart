export interface Vertical {
  name: string;
  categories: Category[];
  isCollapsed: boolean;
}

export interface Category {
  name: string;
  total: number;
  malePercentage: number;
  femalePercentage: number;
}
