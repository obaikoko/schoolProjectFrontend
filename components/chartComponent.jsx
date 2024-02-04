// import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';

// const BarChart = () => {
//   const chartRef = useRef(null);
//   const chartInstance = useRef(null);

//   const data = {
//     sales: [
//       'January',
//       'February',
//       'March',
//       'April',
//       'May',
//       'June',
//       'July',
//       'August',
//       'September',
//       'Octorber',
//       'November',
//       'December',
//     ],
//     salesValues: [12, 19, 3, 5, 12, 15, 40, 53, 36, 28, 27, 15],
//     orders: [
//       'January',
//       'February',
//       'March',
//       'April',
//       'May',
//       'June',
//       'July',
//       'August',
//       'September',
//       'Octorber',
//       'November',
//       'December',
//     ],
//     OrderValues: [23, 42, 55, 42, 7, 10, 83, 52, 18, 15, 51, 31],
//   };

//   useEffect(() => {
//     if (chartRef && chartRef.current) {
//       const ctx = chartRef.current.getContext('2d');

//       // Check if there's an existing chart instance, destroy it
//       if (chartInstance.current) {
//         chartInstance.current.destroy();
//       }

//       chartInstance.current = new Chart(ctx, {
//         type: 'bar',
//         data: {
//           labels: data.sales,
//           datasets: [
//             {
//               label: 'Sales Statistics',
//               data: data.salesValues,
//               backgroundColor: 'blue',
//               borderColor: '#fff',
//               borderWidth: 1,
//             },
//             {
//               label: 'Order Statistics',
//               data: data.OrderValues,
//               backgroundColor: 'red',
//               borderColor: '#fff',
//               borderWidth: 1,
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           plugins: {
//             legend: {
//               position: 'top',
//             },
//             title: {
//               display: true,
//               text: 'Sales and Orders',
//             },
//           },
//         },
//       });
//     }
//   }, []);

//   return <canvas ref={chartRef} />;
// };

// export default BarChart;
