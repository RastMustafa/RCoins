/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
import React, { useMemo } from "react";

import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
  useFilters,
  useRowSelect,
  useBlockLayout,
} from "react-table";
import { useSticky } from "react-table-sticky";
import MOCK_DATA from "./MOCK_DATA.json";
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import GlobalFilter from "./GlobalFilter";
import Dialoge from "./dialog";
import { TableColsContext } from "../../utlites/tableContext";
import { COLUMNS } from "./columns";
import ChartCol from "./ChartCol";
import { Styles } from "./TableStyles";
import MockData from "./MockData";
function CryptoTable({ coinsData }) {
  const { btnSelect } = React.useContext(TableColsContext);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => coinsData, [coinsData]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    canNextPage,
    canPreviousPage,
    previousPage,
    pageOptions,
    gotoPage,
    setPageSize,
    pageCount,
    state,
    prepareRow,
    footerGroups,
    setGlobalFilter,
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 5,
        hiddenColumns: [
          "price_change_percentage_24h",
          "price_change_percentage_7d_in_currency",
          "price_change_percentage_30d_in_currency",
          "price_change_percentage_200d_in_currency",
          "market_cap",
          "market_cap_change_24h",
          "market_cap_change_percentage_24h",
          "total_supply",
          "circulating_supply",
          "sevenDays",
          "towMonth",
        ],
      },
    },
    useBlockLayout,
    useSticky,
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        ...columns,
        // Let's make a column for selection
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => <div>Chart</div>,

          Cell: (row) => (
            <div className="overflow-hidden w-full">
              {console.log(row.cell.row.original.id)}
              <ChartCol coinId={row.cell.row.original.id} />
            </div>
          ),
        },
      ]);
    }
  );
  const { globalFilter } = state;
  const { pageIndex, pageSize } = state;
  const coloredRows = ["1 h %", "24 h %", "7 d %", "30 d %", "200 d %", "Market Cap ( 24h )", "Market Rate ( 24h )"];
  function isRed(cell) {
    if (cell.value > 0 && coloredRows.includes(cell.column.Header)) {
      return "text-green-400";
    } else if (cell.value < 0 && coloredRows.includes(cell.column.Header)) {
      return "text-red-400";
    }
  }
  return (
    <>
      <div className="w-full overflow-hidden  shadow-sm rounded-lg flex flex-col md:flex-row backdrop-blur-4xl bg-white bg-opacity-60	  container justify-between gap-12 md:gap-24 p-2  md:px-8  px-4 pb-4  mx-auto  pt-12">
        {/* ============ search box start ========== */}
        <div className="w-24 grid-cols-1 font-body ">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
        {/* ============ search box end ========== */}

        <div className="flex flex-row-reverse justify-between gap-6 md:flex-row ">
          {/* ============ Catagories menu start ========== */}
          <div className="   ">
            <Dialoge allColumns={allColumns} />
          </div>
          <div></div>
          {/* ============ Catagories menu end ========== */}

          {/* ============ select pageNumber start ========== */}
          <div className="  ">
            <select
              value={pageSize.toString()}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
              className=" 
               text-gray-900 text-sm  rounded-lg  block w-full p-2.5 shadow-md  px-2 tracking-widest font-semibold font-display  "
            >
              {[5, 10, 15].map((pageSize) => (
                <option className=" " value={pageSize.toString()} key={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
          {/* ============ select pageNumber start ========== */}
        </div>
      </div>
      <div className=" font-body  scrollbar-hide overflow-x-scroll    rounded-lg pt-4    shadow-xl z-0 container mx-auto ">
        <Styles>
          <div {...getTableProps()} className="table  text-center sticky  ">
            <div className="header py-4 !bg-white">
              {headerGroups.map((headerGroup) => (
                <div {...headerGroup.getHeaderGroupProps()} className="tr ">
                  {headerGroup.headers.map((column) => (
                    <div
                      key={column.id}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="th max-w-8 !bg-white "
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? column.isSortedDesc ? <AiOutlineArrowDown /> : <AiOutlineArrowDown /> : ""}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div {...getTableBodyProps()} className="body !bg-white">
              {page.map((row) => {
                prepareRow(row);
                return (
                  <div {...row.getRowProps()} className="tr  !bg-white">
                    {row.cells.map((cell) => (
                      <div {...cell.getCellProps()} className="td  truncate overflow-hidden max-w-8  bg-white">
                        <span className={`${isRed(cell)}`}>{cell.render("Cell")}</span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </Styles>
      </div>
      <div className=" h-14  bg-white shadow-xl mx-auto flex items-center container max-w-1/2    flex-row gap-4 justify-center ">
        <button disabled={!canPreviousPage} onClick={() => gotoPage(0)}>
          {"<<"}
        </button>
        <button disabled={!canPreviousPage} onClick={() => previousPage()}>
          Privious
        </button>
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{" "}
        <button disabled={!canNextPage} onClick={() => nextPage()}>
          Next
        </button>
        <button disabled={!canNextPage} onClick={() => gotoPage(pageCount - 1)}>
          {">>"}
        </button>
      </div>
    </>
  );
}

export default CryptoTable;
