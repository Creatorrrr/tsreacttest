import GridOption from "../types/GridOption";
import NGDefaultItem from "./NGDefaultItem";

type Props = {
  options: GridOption;
  columns: Array<string>;
  data: Array<any>;
  rowItem: any;
};

function NGRow({ options, columns, data, rowItem }: Props) {
  return (
    <div>
      NGRow
      {columns?.map((column: string) => (
        <NGDefaultItem
          options={options}
          columns={columns}
          data={data}
          rowItem={rowItem}
          item={rowItem[column]}
        />
      ))}
    </div>
  );
}

export default NGRow;
