import React,{useState} from 'react'
import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";


export default function Charted() {
    const [state, setState]= useState({
        options:{
         
          candlestick: {
            wick: {
              useFillColor: true,
            }
          },
          yaxis: {
            opposite: true,},
        },
        series: [{
          data: [{
            
            y: [51.98, 56.29, 51.59, 53.85],
            y1: [1.98, 45.29, 54.59, 85.85],
            x: [
              new Date("2023-03-02").getTime(),
            ],
          },
          {
            y: [53.66, 54.99, 51.35, 52.95],
            x: ["9:00",]
      
          },
          {
            y: [52.76, 57.35, 52.15, 57.03],
            x: ["10:00",]
          },
          {
            y: [53.66, 54.99, 51.35, 52.95],
            x:  ["11:00",],
      
          },
          {
            y: [53.66, 54.99, 51.35, 52.95],
            x:"",
           
      
          },
          {
            y: [53.66, 54.99, 51.35, 52.95],
           x:"",
            
      
          },
          {
            y: [53.66, 54.99, 51.35, 52.95],
            x:  ["12:00",],
      
          },
          {
            y: [53.66, 54.99, 51.35, 52.95],
           x:"",
            
      
          },
          {
            y: [53.66, 54.99, 51.35, 52.95],
            x:  ["13:00",],
      
          },
          {
            y: [53.66, 54.99, 51.35, 52.95],
            x:"",
           
      
          },
          {
            y: [53.66, 54.99, 51.35, 52.95],
            x:  ["14:00",],
      
          },
          {
            y: [53.66, 54.99, 51.35, 52.95],
            x:"",
           
      
          },
          {
            y: [53.66, 54.99, 51.35, 52.95],
            x:  ["15:00",],
      
          },
          {
            y: [53.66, 54.99, 51.35, 52.95],
           x:"",
      
          },
          {
            y: [53.66, 54.99, 51.35, 52.95],
            x:  ["16:00",],
      
          },
          
        ]
        }]
        
      })
      
        return (
          <>
              <Chart
                    options={state.options}
                    series={state.series}
                    type="candlestick"
                    width="500"
                  />
                
          </>
        )
      }
  
