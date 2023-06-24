"use client";

import { FC, ReactNode, useState } from "react";
import classnames from "classnames";
import styles from "@/styles/ProductCard.module.css";
import { useStartViewTransitionCallback } from "@/lib/viewTransition";

type ProductCardProps = {
  name: string;
  image: string;
  children?: ReactNode;
  liveLink?: string;
  sourceLink?: string;
};

export const ProductCard: FC<ProductCardProps> = ({
  name,
  image,
  children,
  liveLink,
  sourceLink,
}) => {
  const [isActive, setIsActive] = useState(false);
  const changeActiveState = useStartViewTransitionCallback((bool: boolean) =>
    setIsActive(bool)
  );

  return (
    <>
      <button
        className={classnames(
          "flex flex-col items-center justify-center w-64 h-auto p-4 m-4 bg-white shadow-md rounded-xl hover:shadow-lg",
          styles.ProductCard
        )}
        onClick={() => {
          changeActiveState(true);
        }}
      >
        <img src={image} alt="profile" className="w-32 h-32 rounded-full" />
        <h2 className="mt-4 text-xl font-bold text-center text-gray-500">
          {name}
        </h2>
      </button>
      {isActive && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
          onClick={() => {
            changeActiveState(false);
          }}
        >
          <div
            className={classnames(
              "flex flex-col items-center justify-center h-auto p-8 m-4 bg-white shadow-md rounded-xl hover:shadow-xl",
              styles.ProductCard
            )}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              className="sticky top-0 self-end w-8 h-8 text-gray-500 transition-all hover:text-gray-400"
              type="button"
              onClick={() => {
                changeActiveState(false);
              }}
              aria-label="close"
            >
              <span className="absolute block w-8 h-1 bg-gray-500 rounded-full transform rotate-45"></span>
              <span className="absolute block w-8 h-1 bg-gray-500 rounded-full transform -rotate-45"></span>
            </button>
            <img src={image} alt="profile" className="w-32 h-32 rounded-full" />
            <h2 className="mt-4 text-xl font-bold text-center text-gray-500">
              {name}
            </h2>
            <div className="flex flex-col items-center justify-center w-full mt-4 gap-4">
              {children && (
                <div className="w-full p-4 text-gray-700 whitespace-pre-line">
                  {children}
                </div>
              )}
              {liveLink && (
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center justify-center w-32 h-8 text-white bg-blue-500 rounded-lg transition-all hover:bg-blue-400">
                    Live
                  </button>
                </a>
              )}
              {sourceLink && (
                <a href={sourceLink} target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center justify-center w-32 h-8 text-white rounded-lg transition-all bg-amber-500 hover:bg-amber-400">
                    Source
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
