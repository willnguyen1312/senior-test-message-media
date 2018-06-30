import { injectGlobal } from "styled-components";

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  * {
    border: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  html {
    display: flex;
    height: 100%;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.5;
    background-color: #ffffff;
    color: #16171a;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  body {
    display: flex;
    box-sizing: border-box;
    flex: auto;
    align-self: stretch;
    max-width: 100%;
    max-height: 100%;
    -webkit-overflow-scrolling: touch;
  }

  .pagination {
    display: flex;
    justify-content: space-around;
    width: 100vw;
    max-width: 600px;

    li {
      display: flex;
      align-items: center;
      list-style: none;
      cursor: pointer;
    }

    .active {
      padding-left: 10px;
      padding-right: 10px;
      background-color: #FACD00;
    }

    .previous, .next {
      padding-left: 10px;
      padding-right: 10px;
      text-transform: capitalize;
      background-color: #26697e;
    }
  }
`;
