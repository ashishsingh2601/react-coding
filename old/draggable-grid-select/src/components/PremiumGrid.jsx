import React from 'react'
import { useState, useCallback } from "react";

const PremiumGrid = ({rows = 10, cols = 10}) => {
    const [selectedCells, setSelectedCells] = useState([]);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const bookedCells = new Set([1, 2, 5, 64, 74, 24, 75, 76, 77, 90, 29, 70, 91, 92, 15]);
  
    const handleMouseDown = (cellNumber) => {
      setIsMouseDown(true);
      setSelectedCells([cellNumber]);
    };
  
    const handleMouseEnter = useCallback(
      (cellNumber) => {
        if (isMouseDown) {
          const startCell = selectedCells[0];
          const endCell = cellNumber;
  
          const startCellRow = Math.floor((startCell - 1) / cols);
          const endCellRow = Math.floor((endCell - 1) / cols);
          const startCellCol = (startCell - 1) % cols;
          const endCellCol = (endCell - 1) % cols;
  
          const minRow = Math.min(startCellRow, endCellRow);
          const maxRow = Math.max(startCellRow, endCellRow);
          const minCol = Math.min(startCellCol, endCellCol);
          const maxCol = Math.max(startCellCol, endCellCol);
  
          const selected = [];
  
          for (let row = minRow; row <= maxRow; row++) {
            for (let col = minCol; col <= maxCol; col++) {
              selected.push(row * cols + col + 1);
            }
          }
  
          const filteredSelected = selected?.filter((cell) => !bookedCells.has(cell));
  
          setSelectedCells(filteredSelected);
        }
      },
      [isMouseDown]
    );
  
    console.log(selectedCells)
  
    const handleMouseUp = () => {
      setIsMouseDown(false);
    };
  
    const costOfTickets = 200 * selectedCells.length; 
    console.log(costOfTickets)
  
    return (
      <>
        <div
          className="grid"
          style={{ "--rows": rows, "--cols": cols }}
        >
          {[...Array(rows * cols).keys()]?.map((index) => {
            return (
              <div
                key={index}
                className={`box ${
                  selectedCells.includes(index + 1) ? "selected" : ""
                } ${bookedCells.has(index + 1) ? "booked" : ""} `}
                onMouseDown={() => handleMouseDown(index + 1)}
                onMouseEnter={() => handleMouseEnter(index + 1)}
                onMouseUp={() => handleMouseUp()}
              >
                P{index + 1}
              </div>
            );
          })}
        </div>
      </>
    );
  };

export default PremiumGrid