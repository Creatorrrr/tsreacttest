import GridOption from "../types/GridOption";
import NGDefaultPagination from "./NGDefaultPagination";

type Props = {
  options: GridOption;
  columns: Array<string>;
  data: Array<any>;
  page: number;
  onPageChange: (page: number) => void;
};

function NGStatusBar({ options, columns, data, page, onPageChange }: Props) {
  return (
    <div>
      NGStatusBar
      <NGDefaultPagination
        options={options}
        columns={columns}
        data={data}
        page={page}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default NGStatusBar;
