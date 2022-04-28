import GridOption from "../types/GridOption";
import NGContent from "./NGContent";
import NGStatusBar from "./NGStatusBar";

type Props = {
  options: GridOption;
  columns: Array<string>;
  data: Array<any>;
  page: number;
  onPageChange: (page: number) => void;
};

function NGLayout({ options, columns, data, page, onPageChange }: Props) {
  return (
    <div>
      NGLayout
      <NGContent options={options} columns={columns} data={data} page={page} />
      <NGStatusBar
        options={options}
        columns={columns}
        data={data}
        page={page}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default NGLayout;
