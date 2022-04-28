import GridOption from "../types/GridOption";
import NGDefaultColumn from "./NGDefaultColumn";

type Props = {
  options: GridOption;
  columns: Array<string>;
  data: Array<any>;
};

function NGHeader({ options, columns, data }: Props) {
  return (
    <div>
      NGHeader
      {columns?.map((column: string) => (
        <NGDefaultColumn
          options={options}
          columns={columns}
          data={data}
          column={column}
        />
      ))}
    </div>
  );
}

export default NGHeader;
