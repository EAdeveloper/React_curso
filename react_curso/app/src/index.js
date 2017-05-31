import React from 'react';
import ReactDom from 'react-dom';

import FilterableProductTable from './Components/FilterableProductTable.js'

const app = document.getElementById("app")
ReactDom.render(<FilterableProductTable/>, app)
