import React, { useRef } from 'react';
import Sidebar from './Sidebar';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import {
  ExamContainer,
  SidebarContainer,
  Content,
  ExamHeader,
  ExamResultsContainer,
  ExamSubject,
  ExamResult,
  ExamChartContainer,
} from '../../styles/ExamStyles';

// Register required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale);

const ExamSection = () => {
  const chartRef = useRef(null);

  // Sample exam results data
  const examResultsData = {
    subjects: ['Math', 'Science', 'English', 'History'],
    results: [80, 75, 90, 85], // Sample results out of 100
  };

  // Bar chart data
  const barChartData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        label: 'Exam Results',
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        borderWidth: 1,
        hoverBackgroundColor: '#0056b3',
        hoverBorderColor: '#0056b3',
        data: examResultsData.results,
      },
    ],
  };

  // Chart options (updated for Chart.js v4)
  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
      x: {
        ticks: {
          autoSkip: false,
        },
      },
    },
  };

  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Results</ExamHeader>
        <ExamResultsContainer>
          {examResultsData.subjects.map((subject, index) => (
            <div key={index}>
              <ExamSubject>{subject}</ExamSubject>
              <ExamResult>Score: {examResultsData.results[index]}%</ExamResult>
            </div>
          ))}
          <ExamChartContainer>
            <Bar ref={chartRef} data={barChartData} options={chartOptions} />
          </ExamChartContainer>
        </ExamResultsContainer>
      </Content>
    </ExamContainer>
  );
};

export default ExamSection;
