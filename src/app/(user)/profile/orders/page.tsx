'use client';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
const columns = [
  { field: 'title', headerName: 'username', flex: 1, headerClassName: 'red' },
  { field: 'status', headerName: 'status', flex: 1 },
  { field: 'createdAt', headerName: 'date', flex: 1 },
  { field: 'amount', headerName: 'amount', flex: 1 },
];
const Orders = () => {
  const rows = [
    {
      _id: 1,
      title: 'product',
      status: 'cancelled',
      createdAt: '11/2/24',
      amount: 200,
      image: '',
    },
    {
      _id: 2,
      title: 'product',
      status: 'completed',
      createdAt: '11/2/24',
      amount: 200,
      image: '',
    },
    {
      _id: 3,
      title: 'product',
      status: 'pending',
      createdAt: '11/2/24',
      amount: 200,
      image: '',
    },
    {
      _id: 4,
      title: 'product',
      status: 'cancelled',
      createdAt: '11/2/24',
      amount: 200,
      image: '',
    },
    {
      _id: 5,
      title: 'product',
      status: 'cancelled',
      createdAt: '11/2/24',
      amount: 200,
      image: '',
    },
    {
      _id: 6,
      title: 'product',
      status: 'pending',
      createdAt: '11/2/24',
      amount: 200,
      image: '',
    },
    {
      _id: 7,
      title: 'product',
      status: 'completed',
      createdAt: '11/2/24',
      amount: 200,
      image: '',
    },
    {
      _id: 8,
      title: 'product',
      status: 'cancelled',
      createdAt: '11/2/24',
      amount: 200,
      image: '',
    },
  ];

  return (
    <div className=' h-full w-full p-4'>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={row => row._id}
        sx={{
          // Header styling
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#151c2c', // Header background color
            color: '#151c2c', // Text color for the header
            borderBottom: '1px solid #151c2c', // Border below header
          },
          // Row styling
          '& .MuiDataGrid-row': {
            borderBottom: '1px solid #151c2c', // Row bottom border color
          },
          // Cell styling
          '& .MuiDataGrid-cell': {
            borderBottom: '1px solid #151c2c', // Cell bottom border color
          },
          // Ensure alternating row colors if needed
          '& .MuiDataGrid-row:nth-of-type(even)': {
            backgroundColor: '#1e2a38', // Optional: background color for even rows
          },
        }}
      />
    </div>
  );
};

export default Orders;
