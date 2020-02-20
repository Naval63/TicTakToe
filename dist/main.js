"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var PLAYER1 = 'fa-circle-o';
var PLAYER2 = 'fa-times';
var round = 1;
var board = [['', '', ''], ['', '', ''], ['', '', '']];
var combinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

var boxes = _toConsumableArray(document.querySelectorAll('.box'));

boxes.forEach(function (box) {
  return box.addEventListener('click', pick);
});

function publishResult(winner) {
  document.querySelector('.score').innerText = winner;
}

function pick(event) {
  var _event$target$dataset = event.target.dataset,
      row = _event$target$dataset.row,
      column = _event$target$dataset.column;
  var turn = round % 2 === 0 ? PLAYER2 : PLAYER1;
  if (board[row][column] !== '') return;
  event.target.classList.add(turn);
  board[row][column] = turn;
  round++;
  console.log(check());
  publishResult(PLAYER1, PLAYER2, check);
}

function check() {
  var result = board.reduce(function (total, row) {
    return total.concat(row);
  });
  var winner = '';
  var moves = {
    'fa-times': [],
    'fa-circle-o': []
  };
  result.forEach(function (field, index) {
    return moves[field] ? moves[field].push(index) : null;
  });
  combinations.forEach(function (combination) {
    if (combination.every(function (index) {
      return moves[PLAYER1].indexOf(index) > -1;
    })) {
      return winner = 'Winner: Player 1';
    }

    if (combination.every(function (index) {
      return moves[PLAYER2].indexOf(index) > -1;
    })) {
      return winner = 'Winner: Player 2';
    }
  });
  return winner;
}