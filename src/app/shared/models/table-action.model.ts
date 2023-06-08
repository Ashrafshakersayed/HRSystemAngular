export interface TableAction {
  name: string;
  icon?: string;
  handler: (rowData:any) => void;
  isHidden?: (rowData:any) => boolean;
}
