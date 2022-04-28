import GridOption from "../types/GridOption";

type Props = {
  options: GridOption;
  columns: Array<string>;
  data: Array<any>;
  rowItem: any;
  item: any;
};

function NGDefaultItem({ options, columns, data, rowItem, item }: Props) {
  return <div>NGDefaultItem {item}</div>;
}

export default NGDefaultItem;
