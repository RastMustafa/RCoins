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
      <div className=" shadow-xl font-display  md:px-8  px-4  mt-6  w-full   container mx-auto  py-12">
        <div className="w-full  flex flex-row justify-between gap-36 p-2 mb-4 h-12">
          {/* ============ search box start ========== */}
          <div className="w-24 grid-cols-1 font-display ">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          </div>
          {/* ============ search box end ========== */}

          <div className="flex flex-row gap-12">
            {/* ============ Catagories menu start ========== */}
            <div className="   ">
              <Dialoge allColumns={allColumns} />
            </div>
            {/* ============ Catagories menu end ========== */}

            {/* ============ select pageNumber start ========== */}
            <div className="!font-display">
              <Select
                variant="standard"
                label="Select Version"
                value={pageSize.toString()}
                onChange={(e) => {
                  setPageSize(Number(e));
                }}
              >
                {[5, 10, 15].map((pageSize) => (
                  <Option value={pageSize.toString()} key={pageSize}>
                    Show {pageSize}
                  </Option>
                ))}
              </Select>
            </div>
            {/* ============ select pageNumber start ========== */}
          </div>
        </div>
        <Styles>
          <div {...getTableProps()} className="table sticky">
            <div className="header">
              {headerGroups.map((headerGroup) => (
                <div {...headerGroup.getHeaderGroupProps()} className="tr">
                  {headerGroup.headers.map((column) => (
                    <div key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())} className="th">
                      {column.render("Header")}
                      <span>
                       {column.isSorted ? column.isSortedDesc ? <AiOutlineArrowDown /> : <AiOutlineArrowDown /> : ""}
                     </span>
                    </div>
                 
                  ))}
                </div>
              ))}
            </div>
            <div {...getTableBodyProps()} className="body">
              {page.map((row) => {
                prepareRow(row);
                return (
                  <div {...row.getRowProps()} className="tr">
                    {row.cells.map((cell) => (
                      <div {...cell.getCellProps()} className="td">
                        {cell.render("Cell")}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </Styles>
        {/* <table className="relative" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, i) => {
              // headerGroup.headers.pop()
              return (
                <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => {
                    console.log(column);
                    const fixColIndex = column.id === "id_placeholder" ? "fixColumn" : "";
                    return (
                      <th key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render("Header")}
                        <span>
                          {column.isSorted ? column.isSortedDesc ? <AiOutlineArrowDown /> : <AiOutlineArrowDown /> : ""}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr key={i} {...row.getRowProps()}>
                  {row.cells.map((cell, i) => {
                    return (
                      <td key={i} {...cell.getCellProps}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table> */}
        <div className="mx-auto mt-2 font-semibold flex flex-row gap-4 justify-center w-full">
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
