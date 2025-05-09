import React from 'react';
import Sidebar from './Sidebar';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import {
  PerformanceContainer,
  SidebarContainer,
  Content,
  PerformanceHeader,
  PerformanceInfo,
  PerformanceGraphContainer,
  TotalMarks,
} from '../../styles/PerformanceStyles'; // Import styled components from PerformanceSectionStyles.js

// Register required Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const PerformanceSection = () => {
  // Sample performance data
  const performanceData = {
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    marks: [80, 85, 90, 88, 92, 85], // Sample marks for each month
    totalMarks: 520, // Sample total marks for the year
  };

  // Line chart data
  const lineChartData = {
    labels: performanceData.months,
    datasets: [
      {
        label: 'Performance Trends',
        fill: false,
        tension: 0.1,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        data: performanceData.marks,
      },
    ],
  };

  return (
    <PerformanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <PerformanceHeader>Performance</PerformanceHeader>
        <PerformanceInfo>
          <PerformanceGraphContainer>
            <Line
              data={lineChartData}
              options={{
                responsive: true,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                  x: {
                    ticks: {
                      autoSkip: false,
                    },
                  },
                },
              }}
            />
          </PerformanceGraphContainer>
          <TotalMarks>Total Marks: {performanceData.totalMarks}</TotalMarks>
        </PerformanceInfo>
      </Content>
    </PerformanceContainer>
  );
};

export default PerformanceSection;
