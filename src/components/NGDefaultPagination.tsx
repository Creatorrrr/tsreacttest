import GridOption from "../types/GridOption";

type Props = {
  options: GridOption;
  columns: Array<string>;
  data: Array<any>;
  page: number;
  onPageChange: (page: number) => void;
};

function NGDefaultPagination({
  options,
  columns,
  data,
  page,
  onPageChange,
}: Props) {
  const pageSize = options?.pageSize || 10;
  const totalPage = Math.ceil(data.length / pageSize);
  const pageList = Array.from({ length: totalPage }, (v, i) => i + 1);

  return (
    <div>
      NGDefaultPagination
      {pageList?.map((item: number) => (
        <a onClick={() => onPageChange(item)}>{item}</a>
      ))}
    </div>
  );
}

export default NGDefaultPagination;
