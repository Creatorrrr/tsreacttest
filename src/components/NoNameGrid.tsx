import { useState } from "react";
import GridOption from "../types/GridOption";
import NGLayout from "./NGLayout";

type Props = {
  options?: GridOption;
  columns: Array<string>;
  data: Array<any>;
  onPageChange?: (page: number) => void;
};

function NoNameGrid({ options, columns, data, onPageChange }: Props) {
  const [page, setPage] = useState(1);

  return (
    <div>
      NoNameGrid
      <NGLayout
        options={{ ...options, pageSize: 10 }}
        columns={columns}
        data={data}
        page={page}
        onPageChange={(page: number) => {
          setPage(page);
          if (onPageChange) onPageChange(page);
        }}
      />
    </div>
  );
}

export default NoNameGrid;
