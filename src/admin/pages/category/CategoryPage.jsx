import React from 'react';
import Table from '../../components/data-table/DataTable';
import FullScreenDialog from '../../components/dialog/FullScreenDialog';

const CategoryPage = () => {  
  return (
    <React.Fragment>
      <FullScreenDialog/>
      <Table />
    </React.Fragment>
  )
}

export default CategoryPage
