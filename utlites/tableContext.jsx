import React from "react";
import { useReducer } from "react";
import { useState } from "react";
export const TableColsContext = React.createContext();
function TableContext({ children }) {
  //   function reducer(state, action) {
  //     switch (action.type) {
  //       case "TABLE_CLOS":
  //         console.log(action);
  //       default:
  //         return console.log(action);
  //     }
  //   }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const { state, dispatch } = useReducer(reducer, {});
  const [btnSelect, setBtnSelect] = useState({
    COLUMNS: [
      {
        Header: "#",
        Footer: "Id",
        accessor: "id",
        // Filter:ColumnFilter,
        disableFilters: true,
      },
      {
        Header: "Name",
        FooterL: "Name",
        columns: [
          {
            Header: "Name",
            Footer: "First Name",
            accessor: "first_name",
            // Filter:ColumnFilter
          },
          {
            Header: "Price",
            Footer: "Last Name",
            accessor: "last_name",
            // Filter:ColumnFilter
          },
        ],
      },
      {
        Header: "Info",
        Footer: "Info",
        columns: [
          {
            Header: "Date of Birth",
            Footer: "Date of Birth",
            accessor: "date_of_birth",
            // Filter:ColumnFilter
          },
          {
            Header: "Country",
            Footer: "Country",
            accessor: "country",
            // Filter:ColumnFilter
          },
          {
            Header: "Phone",
            Footer: "Phone",
            accessor: "phone",
            // Filter:ColumnFilter
          },
        ],
      },
    ],
  });
  return (
    <div>
      <TableColsContext.Provider value={{ btnSelect, setBtnSelect }}>{children}</TableColsContext.Provider>
    </div>
  );
}

export default TableContext;

// export const GROUPED_COULMNS = [
//   {
//     Header: "#",
//     Footer: "Id",
//     accessor: "id",
//     // Filter:ColumnFilter,
//     disableFilters:true
//   },
//   {
//     Header: "Name",
//     FooterL: "Name",
//     columns: [
//       {
//         Header: "Name",
//         Footer: "First Name",
//         accessor: "first_name",
//         // Filter:ColumnFilter
//       },
//       {
//         Header: "Price",
//         Footer: "Last Name",
//         accessor: "last_name",
//         // Filter:ColumnFilter
//       },
//     ],
//   },
//   {
//     Header: "Info",
//     Footer: "Info",
//     columns: [
//       {
//         Header: "Date of Birth",
//         Footer: "Date of Birth",
//         accessor: "date_of_birth",
//         // Filter:ColumnFilter
//       },
//       {
//         Header: "Country",
//         Footer: "Country",
//         accessor: "country",
//         // Filter:ColumnFilter
//       },
//       {
//         Header: "Phone",
//         Footer: "Phone",
//         accessor: "phone",
//         // Filter:ColumnFilter
//       },
//     ],
//   },
// ];
