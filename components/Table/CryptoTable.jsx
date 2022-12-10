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
function CryptoTable() {
  const { btnSelect } = React.useContext(TableColsContext);
  // const { COLUMNS } = btnSelect;

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
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
        hiddenColumns: [
          "maxSupply",
          "circulatingSupply",
          "VolumeMcap",
          "Volume30d",
          "Volume7d",
          "towMonth",
          "PriceInBTC",
          "PriceInETH",
          "onehour",
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

          Cell: ({ row }) => (
            <div className="max-w-[5rem] inline-block     overflow-hidden ">
              <ChartCol />
            </div>
          ),
        },
      ]);
    }
  );
  const { globalFilter } = state;
  const { pageIndex, pageSize } = state;
  return (
    <>
      <div className="w-full border-b border-green-200 flex flex-col md:flex-row   container justify-between gap-12 md:gap-24 p-2font-display  md:px-8  px-4 pb-4  mx-auto mb-4 pt-12">
        {/* ============ search box start ========== */}
        <div className="w-24 grid-cols-1 font-display ">
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
              className="bg-gray-50  
               text-gray-900 text-sm  rounded-lg  block w-full p-2.5 shadow-md  border-1 border-black px-2 tracking-widest font-semibold   font-display"
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
      <div className=" font-display  border overflow-x-scroll  border-green-100 pt-4    shadow-xl z-0 container mx-auto ">
        <Styles>
          <div {...getTableProps()} className="table text-center sticky !bg-white ">
            <div className="header !bg-white">
              {headerGroups.map((headerGroup) => (
                <div {...headerGroup.getHeaderGroupProps()} className="tr !bg-white">
                  {headerGroup.headers.map((column) => (
                    <div
                      key={column.id}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="th  !bg-white "
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
                      <div {...cell.getCellProps()} className="td  bg-white">
                        {cell.render("Cell")}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mx-auto h-14  bg-white shadow-xl border border-green-100 absolute flex items-center container   flex-row gap-4 justify-center w-full">
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
          </div>{" "}
        </Styles>
      </div>
    </>
  );
}

export default CryptoTable;
/* 
          watchlist 
          portofolio
          |
          Cryptpocurncies
          NFT
          ....
          searchbar 
          Catagorise
        */
