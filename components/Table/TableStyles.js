import styled from "styled-components";
export const Styles = styled.div`
  .table {
    

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th,
    .td {
      padding: 1px;
      // border-bottom: 1px solid #ddd;
      // border-right: 1px solid #ddd;
      background-color: #fff;
      overflow: hidden;

      :last-child {
        border-right: 0;
      }
    }

    &.sticky {
      overflow: scroll;
      .header,
      .footer {
        position: sticky;
        z-index: 1;
        width: fit-content;
      }

      .header {
        top: 0;
        // box-shadow: 0px 3px 3px #ccc;
      }

      .footer {
        bottom: 0;
        box-shadow: 0px -3px 3px #ccc;
      }

      .body {
        position: relative;
        z-index: 0;
      }s

      [data-sticky-td] {
        position: sticky;
      }

      [data-sticky-last-left-td] {
     box-shadow: 1px 1px  0.5px #ccc;
      }

      [data-sticky-first-right-td] {
         box-shadow: 1px 0px 1px #ccc;
      }
    }
  }
`;
