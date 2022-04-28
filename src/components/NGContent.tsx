import GridOption from "../types/GridOption";
import NGBody from "./NGBody";
import NGHeader from "./NGHeader";

type Props = {
  options: GridOption;
  columns: Array<string>;
  data: Array<any>;
  page: number;
};

function NGContent({ options, columns, data, page }: Props) {
  return (
    <div>
      NGContent
      <NGHeader options={options} columns={columns} data={data} />
      <NGBody options={options} columns={columns} data={data} page={page}/>
    </div>
  );
}

export default NGContent;
