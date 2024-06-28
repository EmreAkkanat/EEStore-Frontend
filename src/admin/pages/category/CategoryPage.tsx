import React from 'react';
import Table from '../../components/data-table/DataTableComponent';
import CreateCategory from './components/CreateCategoryComponent';

const CategoryPage = () => {  
  return (
    <React.Fragment>
      <CreateCategory/>
      <Table />
    </React.Fragment>
  )
}

export default CategoryPage
