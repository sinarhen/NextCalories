'use client';

import React, {useCallback, useRef, useState} from "react";

import {CiWarning} from "react-icons/ci";
import {TbSwimming} from "react-icons/tb";
import {AiOutlineCalculator, AiOutlineFire, AiOutlineUnorderedList,} from "react-icons/ai";
import {FaRunning, FaWalking} from "react-icons/fa";
import {BiCycling} from "react-icons/bi";
import {PiBowlFood} from "react-icons/pi";

import RecipePageContentSection from "@/components/ui/recipe/recipe-page-content-section";
import ActivityTime from "@/components/ui/recipe/activity-time";
import NutrientsTable from "@/components/ui/recipe/nutrients-table";
import {twMerge} from "tailwind-merge";
import NutrientsCalculator from "@/components/ui/recipe/nutrients-calculator";

interface RecipePageContentProps {
  recipe: any;
}

const RecipePageContent: React.FC<RecipePageContentProps> = ({recipe}) => {
  const cautions = recipe.cautions;
  const ingredients = recipe.ingredientLines;
  const calories = recipe.calories;
  const fats = recipe.totalNutrients.FAT.quantity;
  const carbs = recipe.totalNutrients.CHOCDF.quantity;
  const protein = recipe.totalNutrients.PROCNT.quantity;

  const [showTable, setShowTable] = useState(false);

  const scrollToTable = useCallback(() => {
    console.log('scroll')
    const tableElement = tableRef.current?.querySelector("h1"); // Replace with your actual selector
    if (tableElement) {
      if (!showTable) {
        setTimeout(
          () => {
            tableElement.scrollIntoView({behavior: "smooth", block: "start"})
          }, 10
        )
      }
    }
  }, [showTable]);

  const toggleShowTable = useCallback(() => {
    setShowTable(!showTable);
  }, [showTable]);

  const tableRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="text-md w-full sm:text-sm gap-x-7 gap-y-12 grid grid-cols-8">
        <RecipePageContentSection
          className="md:col-span-5 lg:col-span-4 row-span-2 col-span-8"
          header="Ingredients"
          icon={AiOutlineUnorderedList}
        >
          <ul className="list ml-3 list-disc mt-3">
            {ingredients.map((ingredient: string[], index: number) => (
              <li className="text-md md:text-sm" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
        </RecipePageContentSection>

        <RecipePageContentSection
          header={"Cautions"}
          icon={CiWarning}
          className="col-span-8 rounded bg-red-100 w-full px-2 py-1 sm:col-span-2"
        >
          <ul className="list list-disc ml-5">
            {cautions.map((label: string[], index: number) => (
              <li key={index}>{label}</li>
            ))}
          </ul>
        </RecipePageContentSection>

        <RecipePageContentSection
          icon={AiOutlineCalculator}
          header="Calculator"
          className="col-span-8  sm:col-span-5 lg:col-span-4"
        >
          <NutrientsCalculator
            fats={fats}
            protein={protein}
            carbs={carbs}
            totalWeight={recipe.totalWeight}
            calories={calories}
          />
        </RecipePageContentSection>

        <RecipePageContentSection
          header={"Burning time"}
          icon={AiOutlineFire}
          className="col-span-8"
        >
          <h1>
            This is how many time it will take to burn <b>{calories.toFixed()}</b>{" "}
            calories
          </h1>
          <div className="grid-cols-2 md:grid-cols-4 mt-3 gap-x-3 gap-y-2 md:grid-rows-1 grid-rows-2 grid">
            <ActivityTime
              icon={TbSwimming}
              header="Swimming"
              minutes={(calories / 10).toFixed()}
            />
            <ActivityTime
              icon={FaRunning}
              header="Running"
              minutes={(calories / 11.4).toFixed()}
            />
            <ActivityTime
              icon={BiCycling}
              header="Cycling"
              minutes={(calories / 6.73).toFixed()}
            />
            <ActivityTime
              icon={FaWalking}
              header="Walking"
              minutes={(calories / 4).toFixed()}
            />

            <div></div>
          </div>
        </RecipePageContentSection>

        <RecipePageContentSection
          header={
            <div ref={tableRef} className="scroll-smooth flex items-center gap-x-3">
              <h1>Nutrients info</h1>
              <p
                onClick={() => {
                  console.log("clicked");
                  toggleShowTable();
                  scrollToTable();
                }}
                id="nutrients-table"
                className="text-gray-400 hover:underline cursor-pointer text-sm"
              >
                Show/hide
              </p>
            </div>
          }
          icon={PiBowlFood}
          className="col-span-8"
        >
          <div className={twMerge(`w-full hidden transition-all`, showTable && "block")}>
            <h1 className='text-sm text-gray-700 md:text-sm my-1 italic'>* daily value reflects the percentage of the
              daily norm of nutrient consumption</h1>
            <NutrientsTable totalDaily={recipe.totalDaily} nutrientsList={recipe.digest}/>
          </div>
        </RecipePageContentSection>
      </div>

    </>
  );
};

export default RecipePageContent;
