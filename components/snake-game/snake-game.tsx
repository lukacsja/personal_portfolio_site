'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import BoardCorner from './boardcorner';
import RestartButton from './restart-button';
import GameEndMessage from './game-end-message';

type Position = {
  x: number;
  y: number;
};

type MoveDirections = 'up' | 'down' | 'left' | 'right';

const SnakeGame = () => {
  const moveStep = 10;
  const boardWidth = 240;
  const boardHeight = 400;

  const [headPosition, setHeadPosition] = useState<Position>({
    x: 210,
    y: 210,
  });
  const [snakeBody, setSnakeBody] = useState<Position[]>([
    headPosition,
    { x: 210, y: 220 },
    { x: 210, y: 230 },
    { x: 210, y: 240 },
    { x: 210, y: 250 },
  ]);
  const [foodPosition, setFoodPosition] = useState<Position>({
    x: 150,
    y: 100,
  });
  const [currentDirection, setCurrentDirection] =
    useState<MoveDirections | null>(null);

  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameCompleted, setIsGameCompleted] = useState(false);

  const getRandomFoodPosition = (): Position => {
    const maxX = boardWidth;
    const maxY = boardHeight;

    const randomX = Math.floor(Math.random() * (maxX / 10)) * 10;
    const randomY = Math.floor(Math.random() * (maxY / 10)) * 10;

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
  };

  const generateNewFood = () => {
    if (foodLeft > 0) {
      setFoodLeft((prevValue) => prevValue - 1);
      setFoodPosition(getRandomFoodPosition());
    }
  };

  const [foodLeft, setFoodLeft] = useState(10);

  const restartGame = () => {
    setHeadPosition({
      x: 210,
      y: 210,
    });

    const initialSnakeBody = [
      { x: 210, y: 210 },
      { x: 210, y: 220 },
      { x: 210, y: 230 },
      { x: 210, y: 240 },
      { x: 210, y: 250 },
    ];

    setSnakeBody(initialSnakeBody);
    setIsGameCompleted(false);
    setIsGameOver(false);
    setFoodPosition({
      x: 150,
      y: 100,
    });
    setFoodLeft(10);
  };

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
      }, 50);

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

    window.addEventListener('keydown', handleKeyDown);

    if (isGameOver) {
      window.removeEventListener('keydown', handleKeyDown);
      console.log('REMOVED EVENT LISTENER !!!!!!!!!!!!');
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [headPosition, isGameOver]);

  return (
    <div className='gradient relative hidden h-[475px] w-[510px] items-center justify-center gap-[25px] rounded-lg lg:flex'>
      <BoardCorner position='top-left' />
      <BoardCorner position='top-right' />
      <BoardCorner position='bottom-left' />
      <BoardCorner position='bottom-right' />
      <div
        className='relative overflow-hidden rounded-lg bg-primary-light'
        style={{ width: `${boardWidth}px`, height: `${boardHeight}px` }}
      >
        {isGameCompleted && isGameOver && (
          <>
            <GameEndMessage message='well done!' />
            <RestartButton restartGame={restartGame} buttonLabel='play-again' />
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

        {snakeBody.map((pos, index) => (
          <div
            key={index}
            className={`snakeShadow absolute h-[10px] w-[10px] bg-secondary-green text-[5px] first:z-[999] first:bg-red-400`}
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
            }}
          ></div>
        ))}
        <div
          className={`foodShadow absolute h-[10px] w-[10px] rounded-full bg-gradients-green transition-all duration-500`}
          style={{ left: `${foodPosition.x}px`, top: `${foodPosition.y}px` }}
        ></div>
      </div>

      <div className='flex h-[400px] flex-col justify-between text-text-white'>
        <div className='flex flex-col gap-[20px]'>
          <div className='flex flex-col rounded-lg bg-[#011423] bg-opacity-20 p-[16px]'>
            <span>// use keyboard</span>
            <span>// arrows to play</span>
            <div className='mt-[15px] flex flex-col items-center gap-[5px]'>
              <button
                disabled={isGameOver}
                onClick={() => moveSnake('up')}
                className='flex h-[30px] w-[50px] items-center justify-center rounded-md border-[1px] border-[#1E2D3D] bg-primary-dark'
              >
                <Image
                  src='/icons/gameIcons/arrow-up.svg'
                  alt='arrow'
                  className='h-auto w-auto'
                  width={8}
                  height={6}
                />
              </button>
              <div className='flex gap-[5px]'>
                <button
                  disabled={isGameOver}
                  onClick={() => moveSnake('left')}
                  className='flex h-[30px] w-[50px] items-center justify-center rounded-md border-[1px] border-[#1E2D3D] bg-primary-dark'
                >
                  <Image
                    src='/icons/gameIcons/arrow-left.svg'
                    alt='arrow'
                    className='h-auto w-auto'
                    width={8}
                    height={6}
                  />
                </button>
                <button
                  disabled={isGameOver}
                  onClick={() => moveSnake('down')}
                  className='flex h-[30px] w-[50px] items-center justify-center rounded-md border-[1px] border-[#1E2D3D] bg-primary-dark'
                >
                  <Image
                    src='/icons/gameIcons/arrow-down.svg'
                    alt='arrow'
                    className='h-auto w-auto'
                    width={8}
                    height={6}
                  />
                </button>
                <button
                  disabled={isGameOver}
                  onClick={() => moveSnake('right')}
                  className='flex h-[30px] w-[50px] items-center justify-center rounded-md border-[1px] border-[#1E2D3D] bg-primary-dark'
                >
                  <Image
                    src='/icons/gameIcons/arrow-right.svg'
                    alt='arrow'
                    className='h-auto w-auto'
                    width={8}
                    height={6}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-[10px]'>
            <span>// food left</span>
            <div className='flex w-[120px] flex-wrap gap-[14px]'>
              {Array.from({ length: foodLeft }, (value, index) => (
                <div
                  key={index}
                  className={`foodShadow h-[10px] w-[10px] rounded-full bg-gradients-green transition-all duration-500`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <Link
            href='/about'
            className='rounded-lg border-[1px] border-white px-[14px] py-[10px]'
          >
            skip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
