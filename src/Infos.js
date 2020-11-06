import React from "react";

const Infos = ({ match }) => {
  return (
    <div className = "blurred-box1">
        <div className="content">
            <h1 className="info_intro">Introduction</h1>
            <p className="intro">
                Conway’s Game of Life is based on a grid system.  Every individual location on the grid can be understood as a cell.  
                The game, or simulation, occurs over iterations, or generations.  After a generation, a cell may change from living or dead based on how many living or dead neighbors it had in a previous iteration.  
                A neighbor is any immediately adjacent spot on the grid (horizontal, vertical or diagonal).  We can understand this more clearly with an example and a clear demonstration of the rules.
            </p>

            <h2 className="info_title">Life has 4 simple rules:</h2>
            <div className="intro">
                A living cell with less than two living neighbours dies.
            </div>
            <div className="intro">
                A living cell with two or three live neighbours lives.
            </div>
            <div className="intro">
                A living cell with more than three live neighbours dies.
            </div>
            <div className="intro">
                A dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
            </div>

            <h2 className="info_title">Find us here!</h2>
            <div className="intro">
                <strong>Hanhua Jiang</strong>: jiang.hanh@northeastern.edu
            </div>
            <div className="intro">
                <strong>Xin Wang</strong>: wang.xin10@northeastern.edu
            </div>
        </div>
    </div>
  );
};

export default Infos;