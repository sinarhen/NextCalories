'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import { twMerge } from 'tailwind-merge';
import SuggestedItems from '@/components/ui/suggested-items';
import MoreOptions from '@/components/ui/search-recipes/more-options';
import useQueryParams from '@/hooks/use-query-params';
import { useRouter } from 'next/navigation';
import MoreOptionsSelect from '@/components/ui/search-recipes/more-options-select';
import {
    cuisineTypeCategories,
    dietTypeCategories,
    dishTypeCategories,
    healthCategories,
    mealTypeCategories,
} from '@/constants/filters';
import { toast } from 'react-toastify';
import {getRandomProductsName} from "@/utils/random-recipe";

const SearchProducts = () => {
    // Initialize and update input values for search
    const [inputValue, setInputValue] = useState('');
    const [cuisineTypeFilter, setCuisineTypeFilter] = useState('');
    const [dishTypeFilter, setDishTypeFilter] = useState('');
    const [dietTypeFilter, setDietTypeFilter] = useState('');
    const [healthFilter, setHealthFilter] = useState('');
    const [mealTypeFilter, setMealTypeFilter] = useState('');

    // Apply filters and update filterQuery
    const applyFilters = useCallback(() => {
        const data = [
            { name: 'cuisineType', value: cuisineTypeFilter },
            { name: 'dishType', value: dishTypeFilter },
            { name: 'diet', value: dietTypeFilter },
            { name: 'health', value: healthFilter },
            { name: 'mealType', value: mealTypeFilter },
        ];
        setFilterQuery(data);
        toast.success('Filters applied successfully', {toastId: 'filtersApplied'});
    }, [cuisineTypeFilter, dietTypeFilter, dishTypeFilter, healthFilter, mealTypeFilter]);


    const { makeParameters, searchParams, getParameter } = useQueryParams();
    const [filterQuery, setFilterQuery] = useState<{ name: string; value: string }[]>([]);

    useEffect(() => {
        // Load filter values from query parameters
        const mealType = getParameter('mealType');
        const cuisineType = getParameter('cuisineType');
        const diet = getParameter('diet');
        const health = getParameter('health');
        const dishType = getParameter('dishType');

        if (mealType || cuisineType || diet || health || dishType){
            mealType && setMealTypeFilter(mealType);
            cuisineType && setCuisineTypeFilter(cuisineType);
            diet && setDietTypeFilter(diet);
            health && setHealthFilter(health);
            dishType && setDishTypeFilter(dishType);

            applyFilters();
        }
    }, [applyFilters, getParameter, searchParams]);


    const router = useRouter();
    const query = getParameter('q');

    // Handle form submission
    const onSubmit = useCallback(() => {
        try {
            const params = makeParameters([{ name: 'q', value: inputValue }, ...filterQuery]);
            router.push(`/products${params ? '?' + params : ''}`, { scroll: false });
        } catch (err) {
            toast.error('Something went wrong');
        } finally {
            // Any cleanup or post-submission actions can go here
        }
    }, [filterQuery, inputValue, makeParameters, router]);

    // Toggle more options menu
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    // Suggested items generate once, when mounted
    const [suggestedItems, setSuggestedItems] = useState<string[]>();
    useEffect(() => {
        const randomSuggestedItems = getRandomProductsName(4);
        setSuggestedItems(randomSuggestedItems);
    }, []);

    // Background image style
    const divStyle: React.CSSProperties = {
        backgroundImage: `url("https://wallpapers.com/images/hd/healthy-food-pictures-km9yurcpjzjofsf4.jpg")`,
    };

    return (
      <div style={divStyle} className={twMerge('flex w-full bg-cover bg-center items-center space-y-8')}>
          <div className="w-full text-lg md:text-sm text-white h-full bg-black/60 md:py-40 sm:py-30 py-16 flex items-center">
              <div className="md:px-48 lg:px-72 px-14 h-full w-full flex flex-col items-center">
                  <h1 className="font-bold text-5xl md:text-4xl">
                      {query ? `Search "${query}"` : 'Search Products '}
                  </h1>

                  {/* Input field with error handling */}
                  <Input
                    value={inputValue}
                    divClassName="h-12 mt-4 mb-0 text-black"
                    onChange={(e: any) => {
                        setInputValue(e.target.value);
                    }}
                    id="searchCalories"
                    className="rounded-full"
                    label="Search for calories"
                  />

                  {/* Suggested items */}
                  <SuggestedItems items={suggestedItems} onClick={(label: string) => setInputValue(label)} />

                  {/* More options menu */}
                  <MoreOptions isOpen={menuIsOpen} setIsOpen={setMenuIsOpen} onClick={() => applyFilters()}>
                      <MoreOptionsSelect
                        value={cuisineTypeFilter}
                        onChange={setCuisineTypeFilter}
                        placeholder="Choose a type of cuisine"
                        categories={cuisineTypeCategories}
                        label="Cuisine"
                        name="cuisineFilter"
                      />
                      <MoreOptionsSelect
                        value={dishTypeFilter}
                        onChange={setDishTypeFilter}
                        placeholder="Choose a type of dish"
                        categories={dishTypeCategories}
                        label="Dish"
                        name="dishFilter"
                      />
                      <MoreOptionsSelect
                        value={dietTypeFilter}
                        onChange={setDietTypeFilter}
                        placeholder="Choose a type of diet"
                        categories={dietTypeCategories}
                        label="Diet"
                        name="dietFilter"
                      />
                      <MoreOptionsSelect
                        value={healthFilter}
                        onChange={setHealthFilter}
                        placeholder="Choose a type of health"
                        categories={healthCategories}
                        label="Health"
                        name="healthFilter"
                      />
                      <MoreOptionsSelect
                        value={mealTypeFilter}
                        onChange={setMealTypeFilter}
                        placeholder="Choose a type of meal"
                        categories={mealTypeCategories}
                        label="Meal time"
                        name="mealTimeFilter"
                      />
                  </MoreOptions>

                  {/* Button to trigger the search */}
                  <Button
                    disabled={!inputValue}
                    onClick={onSubmit}
                    className="md:w-1/3 sm:w-1/2 w-full mt-2 rounded-full disabled:hover:translate-y-0"
                  >
                      Search
                  </Button>
              </div>
          </div>
      </div>
    );
};

export default SearchProducts;
