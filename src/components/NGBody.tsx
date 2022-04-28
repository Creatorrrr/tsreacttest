import { useMemo } from "react";
import GridOption from "../types/GridOption";
import NGRow from "./NGRow";

type Props = {
  options: GridOption;
  columns: Array<string>;
  data: Array<any>;
  page: number;
};

function NGBody({ options, columns, data, page }: Props) {
  const pageSize = options?.pageSize;
  const startIdx = (page - 1) * pageSize;
  const endIdx = page * pageSize;
  const rowList = useMemo(() => data.slice(startIdx, endIdx), [page, pageSize]);

  return (
    <div>
      NGBody
      {rowList?.map((item: any) => (
        <NGRow options={options} columns={columns} data={data} rowItem={item} />
      ))}
    </div>
  );
}

export default NGBody;
