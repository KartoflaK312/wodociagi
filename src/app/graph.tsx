"use client";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Nawet nie wiem co to", "XD"],
  ["Stacje Przemysłowe", 1],
  ["Oczyszczalnie", 2],
  ["Źródła", 2],
];
export const data2 = [
    ["Nawet nie wiem co to", "XD"],
    ["Aktywne", 3],
    ["Nieaktywne", 2],
  ];

export function Graph() {
  return (
    <section className="flex direction-row flex-wrap align-center justify-center">
    <Chart className="m-[10px] bg-transparent"
      chartType="PieChart"
      data={data}
      width={'450px'}
      height={'400px'}
    />
    <Chart className="m-[10px] bg-transparent"
     chartType="PieChart"
        data={data2}
        width={'450px'}
        height={'400px'}
        />
    </section>
  );
}
