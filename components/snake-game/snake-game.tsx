'use client';

import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import BoardCorner from './boardcorner';
import RestartButton from './restart-button';
import GameEndMessage from './game-end-message';
import { MoveDirections } from '@/lib/types';
import ArrowButton from './arrow-button';
import StartButton from './start-button';
import ScoreBoard from './score-board';
import { motion } from 'framer-motion';

type Position = {
  x: number;
  y: number;
};

const moveStep = 10;
const boardWidth = 240;
const boardHeight = 400;
const foodToCollect = 10;
const initialHeadPos = {
  x: 210,
  y: 180,
};
const initialSnakeBody = [
  initialHeadPos,
  { x: 210, y: 190 },
  { x: 210, y: 200 },
  { x: 210, y: 210 },
  { x: 210, y: 220 },
  { x: 210, y: 230 },
  { x: 210, y: 240 },
  { x: 210, y: 250 },
  { x: 200, y: 250 },
  { x: 190, y: 250 },
  { x: 180, y: 250 },
  { x: 180, y: 260 },
  { x: 180, y: 270 },
];
const initialFoodPos = {
  x: 150,
  y: 100,
};

const SnakeGame = () => {
  const [headPosition, setHeadPosition] = useState<Position>(initialHeadPos);
  const [snakeBody, setSnakeBody] = useState<Position[]>(initialSnakeBody);
  const [foodPosition, setFoodPosition] = useState<Position>(initialFoodPos);

  const [currentDirection, setCurrentDirection] =
    useState<MoveDirections | null>(null);
  const [foodLeft, setFoodLeft] = useState(foodToCollect);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const [isInitialBoardState, setIsInitialBoardState] = useState(true);

  const getRandomFoodPosition = useCallback((): Position => {
    const randomX = Math.floor(Math.random() * (boardWidth / 10)) * 10;
    const randomY = Math.floor(Math.random() * (boardHeight / 10)) * 10;

    const isFoodOnSnake = snakeBody.some(
      (cords) => cords.x === randomX && cords.y === randomY
    );

    if (isFoodOnSnake) {
      return getRandomFoodPosition();
    }

    return {
      x: randomX,
      y: randomY,
    };
  }, [boardHeight, boardWidth]);

  const generateNewFood = useCallback(() => {
    if (foodLeft > 0) {
      setFoodLeft((prevValue) => prevValue - 1);
      setFoodPosition(getRandomFoodPosition());
    }
  }, [foodLeft]);

  const startFirstGame = () => {
    setCurrentDirection('up');
    setIsInitialBoardState(false);
  };

  const restartGame = useCallback(() => {
    setHeadPosition(initialHeadPos);
    setSnakeBody(initialSnakeBody);
    setIsGameCompleted(false);
    setIsGameOver(false);
    setFoodPosition(initialFoodPos);
    setFoodLeft(foodToCollect);
    setCurrentDirection('up');
  }, []);

  const eatFood = () => {
    if (
      foodPosition.x === headPosition.x &&
      foodPosition.y === headPosition.y
    ) {
      const newSnakeBody = [...snakeBody];
      const newHead = { x: foodPosition.x, y: foodPosition.y };
      newSnakeBody.unshift(newHead);
      setSnakeBody(newSnakeBody);
      setHeadPosition(newHead);
      generateNewFood();
    }
  };

  const moveSnake = (direction: MoveDirections) => {
    if (
      (currentDirection === 'up' && direction === 'down') ||
      (currentDirection === 'down' && direction === 'up') ||
      (currentDirection === 'left' && direction === 'right') ||
      (currentDirection === 'right' && direction === 'left')
    ) {
      return;
    }

    const newHead: Position = { ...headPosition };

    switch (direction) {
      case 'up':
        newHead.y -= moveStep;
        break;
      case 'down':
        newHead.y += moveStep;
        break;
      case 'left':
        newHead.x -= moveStep;
        break;
      case 'right':
        newHead.x += moveStep;
        break;
      default:
        return;
    }
    const newSnakeBody = [...snakeBody];

    newSnakeBody.unshift(newHead);
    newSnakeBody.pop();

    setHeadPosition(newHead);
    setSnakeBody(newSnakeBody);
    setCurrentDirection(direction);
  };

  useEffect(() => {
    eatFood();
    if (foodLeft === 0) {
      setIsGameOver(true);
      setIsGameCompleted(true);
    }
  }, [headPosition, foodPosition, snakeBody]);

  useEffect(() => {
    if (!isGameOver && currentDirection) {
      const interval = setInterval(() => {
        moveSnake(currentDirection);
      }, 70);

      return () => clearInterval(interval);
    } else if (isGameOver) {
      setCurrentDirection(null);
    }
  }, [headPosition, currentDirection, isGameOver]);

  useEffect(() => {
    const isCrashingItself = snakeBody
      .slice(2)
      .some(
        (cords) => cords.x === headPosition.x && cords.y === headPosition.y
      );

    const isCrashingWall =
      headPosition.x < 0 ||
      headPosition.x >= boardWidth ||
      headPosition.y < 0 ||
      headPosition.y >= boardHeight;

    if (isCrashingItself || isCrashingWall) {
      setIsGameOver(true);
    }
  }, [headPosition]);

  const roundSnakesHead = useCallback(() => {
    switch (currentDirection) {
      case 'down':
        return 'first:rounded-b';
      case 'right':
        return 'first:rounded-r';
      case 'left':
        return 'first:rounded-l';
      default:
        return 'first:rounded-t';
    }
  }, [currentDirection]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          moveSnake('up');
          break;
        case 'ArrowDown':
          moveSnake('down');
          break;
        case 'ArrowLeft':
          moveSnake('left');
          break;
        case 'ArrowRight':
          moveSnake('right');
          break;
        default:
          break;
      }
    };

    if (!isInitialBoardState) {
      window.addEventListener('keydown', handleKeyDown);
    }

    if (isGameOver) {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [headPosition, isGameOver, isInitialBoardState]);

  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{
        duration: 1,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      }}
    >
      <div className='game-board-styles relative hidden h-[475px] w-[510px] items-center justify-center gap-[25px] rounded-lg lg:flex'>
        <BoardCorner position='top-left' />
        <BoardCorner position='top-right' />
        <BoardCorner position='bottom-left' />
        <BoardCorner position='bottom-right' />
        <div
          className='gamefield-shadow relative overflow-hidden rounded-lg bg-primary-light'
          style={{ width: `${boardWidth}px`, height: `${boardHeight}px` }}
        >
          {isInitialBoardState && <StartButton startGame={startFirstGame} />}
          {isGameCompleted && isGameOver && (
            <>
              <GameEndMessage message='well done!' />
              <RestartButton
                restartGame={restartGame}
                buttonLabel='play-again'
              />
            </>
          )}
          {!isGameCompleted && isGameOver && (
            <>
              <GameEndMessage message='game over!' />
              <RestartButton
                restartGame={restartGame}
                buttonLabel='start-again'
              />
            </>
          )}

          <div className=''>
            {snakeBody.map((pos, index) => {
              const opacity = 1 - 0.9 * (index / (snakeBody.length - 1));
              return (
                <div
                  key={index}
                  className={`absolute h-[10px] w-[10px] ${roundSnakesHead()}`}
                  style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    background: `rgba(67, 217, 173, ${opacity})`,
                  }}
                />
              );
            })}
          </div>
          <div
            className={`food-shadow absolute h-[10px] w-[10px] rounded-full bg-gradients-green transition-all duration-300`}
            style={{ left: `${foodPosition.x}px`, top: `${foodPosition.y}px` }}
          />
        </div>

        <div className='flex h-[400px] flex-col justify-between text-text-white'>
          <div className='flex flex-col gap-[20px]'>
            <div className='flex flex-col rounded-lg bg-[#011423] bg-opacity-20 p-[16px]'>
              <span>// use keyboard</span>
              <span>// arrows to play</span>
              <div className='mt-[15px] flex flex-col items-center gap-[5px]'>
                <ArrowButton
                  isGameOver={isGameOver}
                  direction='up'
                  moveSnake={moveSnake}
                  image='/icons/gameIcons/arrow-up.svg'
                  isFirstGame={isInitialBoardState}
                />
                <div className='flex gap-[5px]'>
                  <ArrowButton
                    isGameOver={isGameOver}
                    direction='left'
                    moveSnake={moveSnake}
                    image='/icons/gameIcons/arrow-left.svg'
                    isFirstGame={isInitialBoardState}
                  />
                  <ArrowButton
                    isGameOver={isGameOver}
                    direction='down'
                    moveSnake={moveSnake}
                    image='/icons/gameIcons/arrow-down.svg'
                    isFirstGame={isInitialBoardState}
                  />
                  <ArrowButton
                    isGameOver={isGameOver}
                    direction='right'
                    moveSnake={moveSnake}
                    image='/icons/gameIcons/arrow-right.svg'
                    isFirstGame={isInitialBoardState}
                  />
                </div>
              </div>
            </div>
            <ScoreBoard foodLeft={foodLeft} />
          </div>

          <div className='flex justify-end'>
            <Link
              href='/about'
              className='rounded-lg border border-white px-[14px] py-[10px] transition-all duration-300 hover:border-opacity-50'
            >
              skip
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SnakeGame;
