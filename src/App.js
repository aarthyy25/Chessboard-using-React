import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChessPawn } from "react-icons/fa6";
import { FaRegChessPawn } from "react-icons/fa6";
import { FaChessRook } from "react-icons/fa6";
import { FaChessQueen } from "react-icons/fa";
import { FaChessKnight } from "react-icons/fa";
import { FaChessBishop } from "react-icons/fa";
import { FaChessKing } from "react-icons/fa";
import { TbChessRook } from "react-icons/tb";
import { LiaChessKnightSolid } from "react-icons/lia";
import { TbChessBishop } from "react-icons/tb";
import { LiaChessKingSolid } from "react-icons/lia";
import { LiaChessQueenSolid } from "react-icons/lia";
function App(){
  return(
    <div className="chessboard">
        <section>
          <div class="container">
            <div class="row">
              <div class="col-2"></div>
              <button class="col-1 black"><FaChessRook /></button>
              <button class="col-1 white"><FaChessKnight /></button>
              <button class="col-1 black"><FaChessBishop /></button>
              <button class="col-1 white"><FaChessQueen /></button>
              <button class="col-1 black"><FaChessKing /></button>
              <button class="col-1 white"><FaChessBishop /></button>
              <button class="col-1 black"><FaChessKnight /></button>
              <button class="col-1 white"><FaChessRook /></button>
              <div class="col-2"></div>
            </div>
            <div class="row">
              <div class="col-2"></div>
              <button class="col-1 white" type="button"><FaChessPawn /></button>
              <button class="col-1 black" type="button"><FaChessPawn /></button>
              <button class="col-1 white" type="button"><FaChessPawn /></button>
              <button class="col-1 black" type="button"><FaChessPawn /></button>
              <button class="col-1 white" type="button"><FaChessPawn /></button>
              <button class="col-1 black" type="button"><FaChessPawn /></button>
              <button class="col-1 white" type="button"><FaChessPawn /></button>
              <button class="col-1 black" type="button"><FaChessPawn /></button>
              <div class="col-2"></div>
            </div>
            <div class="row">
              <div class="col-2"></div>
              <button class="col-1 black" type="button"></button>
              <button class="col-1 white" type="button"></button>
              <button class="col-1 black" type="button"></button>
              <button class="col-1 white" type="button"></button>
              <button class="col-1 black" type="button"></button>
              <button class="col-1 white" type="button"></button>
              <button class="col-1 black" type="button"></button>
              <button class="col-1 white" type="button"></button>
              <div class="col-2"></div>
            </div>
            <div class="row">
              <div class="col-2"></div>
              <button class="col-1 white"type="button"></button>
              <button class="col-1 black"type="button"></button>
              <button class="col-1 white"type="button"></button>
              <button class="col-1 black"type="button"></button>
              <button class="col-1 white"type="button"></button>
              <button class="col-1 black"type="button"></button>
              <button class="col-1 white"type="button"></button>
              <button class="col-1 black"type="button"></button>
              <div class="col-2"></div>
            </div>
            <div class="row">
              <div class="col-2"></div>
              <div class="col-1 black" type="button"></div>
              <div class="col-1 white" type="button"></div>
              <div class="col-1 black" type="button"></div>
              <div class="col-1 white" type="button"></div>
              <div class="col-1 black" type="button"></div>
              <div class="col-1 white" type="button"></div>
              <div class="col-1 black" type="button"></div>
              <div class="col-1 white" type="button"></div>
              <div class="col-2"></div>
            </div>
            <div class="row">
              <div class="col-2"></div>
              <div class="col-1 white" type="button"></div>
              <div class="col-1 black" type="button"></div>
              <div class="col-1 white" type="button"></div>
              <div class="col-1 black" type="button"></div>
              <div class="col-1 white" type="button"></div>
              <div class="col-1 black" type="button"></div>
              <div class="col-1 white" type="button"></div>
              <div class="col-1 black" type="button"></div>
              <div class="col-2"></div>
            </div>
            <div class="row">
              <div class="col-2"></div>
              <button class="col-1 black" type="button"><FaRegChessPawn /></button>
              <button class="col-1 white" type="button"><FaRegChessPawn /></button>
              <button class="col-1 black" type="button"><FaRegChessPawn /></button>
              <button class="col-1 white" type="button"><FaRegChessPawn /></button>
              <button class="col-1 black" type="button"><FaRegChessPawn /></button>
              <button class="col-1 white" type="button"><FaRegChessPawn /></button>
              <button class="col-1 black" type="button"><FaRegChessPawn /></button>
              <button class="col-1 white" type="button"><FaRegChessPawn /></button>
              <div class="col-2"></div>
            </div>
            <div class="row">
              <div class="col-2"></div>
              <button class="col-1 white"><TbChessRook /></button>
              <button class="col-1 black"><LiaChessKnightSolid /></button>
              <button class="col-1 white"><TbChessBishop /></button>
              <button class="col-1 black"><LiaChessKingSolid /></button>
              <button class="col-1 white"><LiaChessQueenSolid /></button>
              <button class="col-1 black"><TbChessBishop /></button>
              <button class="col-1 white"><LiaChessKnightSolid /></button>
              <button class="col-1 black"><TbChessRook /></button>
              <div class="col-2"></div>
            </div>
          </div>
        </section>
    </div>
  )
}
export default App;