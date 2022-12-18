// import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: " ",
    sticky: "left",
    columns: [
      {
        Header: "Market Cap_ank",
        accessor: "market_cap_rank",
      }
      ,{
        Header: "Coin",
        accessor: "id",
      }
    ],
  },
  {
    Header: "Prices",
    columns: [
      {
        Header: "Price In $",
        accessor: "current_price",
      },
      {
        Header: "High 24h",
        accessor: "high_24h",
      },
      {
        Header: "Low 24h",
        accessor: "low_24h",
      },
    ],
  },
  {
    Header: "Change Rate",
    columns: [
      {
        Header: "1 h %",
        accessor: "price_change_percentage_1h_in_currency",
      },
      {
        Header: "24 h % ",
        accessor: "price_change_percentage_24h",
      },
      {
        Header: " 7 d %",
        accessor: "price_change_percentage_7d_in_currency",
      },
      {
        Header: "30 d %",
        accessor: "price_change_percentage_30d_in_currency",
      },
      {
        Header: "200 d %",
        accessor: "price_change_percentage_200d_in_currency",
      },
    ],
  },
  {
    Header: "Volume/Market Cap",
    columns: [
      {
        Header: "Volume ( 24h )",
        accessor: "total_volume",
      },
      {
        Header: "Market Cap",
        accessor: "market_cap",
      },
      {
        Header: "Market Cap ( 24h )",
        accessor: "market_cap_change_24h",
      },
      {
        Header: "Market Rate ( 24h )",
        accessor: "market_cap_change_percentage_24h",
      },
    ],
  },
  {
    Header: "Supply",
    columns: [
      {
        Header: "Max Supply",
        accessor: "max_supply",
      },
      {
        Header: "Total Supply",
        accessor: "total_supply",
      },
      {
        Header: "Circulating Supply",
        accessor: "circulating_supply",
      },
    ],
  },
];
// {
//   Header: "24 h Chart",
//   accessor: "chart24h",
// },
// {
//   Header: "7 d Chart",
//   accessor: "chart7d",
// },
// {
//   Header: "30 d Chart",
//   accessor: "chart30d",
// },
// {
//   Header: "chart60d",
//   accessor: "60 d Chart",
// },
// {
//   Header: "90 d Chart",
//   accessor: "chart90d",
// },
// {
//   Header: "Max Supply",
//   accessor: "maxSupply",
// },
// {
//   Header: "Total Supply",
//   accessor: "totalSupply",
// },
// {
//   Header: "Circulating Supply",
//   accessor: "circulatingSupply",
// },

// export const GROUPED_COULMNS = [
//   {
//     Header: "#",
//     Footer: "Id",
//     accessor: "id",
//     disableFilters: true,
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
