import GridOption from "../types/GridOption";

type Props = {
  options: GridOption;
  columns: Array<string>;
  data: Array<any>;
  column: string;
};

function NGDefaultColumn({ options, columns, data, column }: Props) {
  return <div>NGDefaultColumn {column}</div>;
}

export default NGDefaultColumn;
