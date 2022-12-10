// import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: " ",
    sticky: "left",
    columns: [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Coin",
        accessor: "coin_name",
      },
    ],
  },
  {
    Header: "Prices",
    columns: [
      {
        Header: "Price In $",
        accessor: "PriceInDolar",
      },
      {
        Header: "Price In BTC",
        accessor: "PriceInBTC",
      },
      {
        Header: "Price In ETH",
        accessor: "PriceInETH",
      },
    ],
  },
  {
    Header: "Change Rate",
    columns: [
      {
        Header: "1 h %",
        accessor: "onehour",
      },
      {
        Header: "24 h % ",
        accessor: "oneDay",
      },
      {
        Header: " 7 d %",
        accessor: "sevenDays",
      },
      {
        Header: "30 d %",
        accessor: "oneMonth",
      },
      {
        Header: "60 d %",
        accessor: "towMonth",
      },
    ],
  },
  {
    Header: "Volume",
    columns: [
      {
        Header: "Volume ( 24h )",
        accessor: "Volume24h",
      },
      {
        Header: " Volume ( 7d )",
        accessor: "Volume7d",
      },
      {
        Header: "Volume ( 30d )",
        accessor: "Volume30d",
      },
      {
        Header: " Volume / Mcap",
        accessor: "VolumeMcap",
      },
    ],
  },
  {
    Header: "Supply",
    columns: [
      {
        Header: "Max Supply",
        accessor: "maxSupply",
      },
      {
        Header: "Total Supply",
        accessor: "totalSupply",
      },
      {
        Header: "Circulating Supply",
        accessor: "circulatingSupply",
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
