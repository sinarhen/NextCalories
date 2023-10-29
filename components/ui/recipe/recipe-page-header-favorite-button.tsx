'use client'
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useCallback, useContext, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {AuthContext} from "@/contexts/user-provider";
import {ThreeDots} from "react-loader-spinner";

const RecipePageHeaderFavoriteButton = ({
                                          recipeId
                                        }: {
  recipeId: string
}) => {
  const data = useContext(AuthContext)
  const {data: user, mutate, isLoading} = data;

  const [clickedIsLoading, setClickedIsLoading] = useState(false)
  const isFavorite = user?.favoriteRecipes.includes(recipeId);

  const toggleFavorites = useCallback(async () => {
    let response;
    setClickedIsLoading(true)
    try {
      if (isFavorite) {
        response = await axios.delete(`/api/recipes/favorite/${recipeId}`, {data: {recipeId}});
        toast('Deleted from favorite recipes successfully', {autoClose: 2000, type: 'success'})
      } else {
        response = await axios.post(`/api/recipes/favorite/${recipeId}`, {recipeId});
        toast('Added to favorite products successfully', {autoClose: 2000, type: 'success'})
      }
      const updatedFavoriteIds = response?.data?.favorites;
      mutate({
        ...user,
        favoriteIds: updatedFavoriteIds,
      });
      console.log(updatedFavoriteIds)

    } catch (err: any) {
      toast("Something went wrong", {autoClose: 2000, type: 'error'})
    } finally {
      setClickedIsLoading(false)
    }

  }, [recipeId, isFavorite, user, mutate]);

  const Icon = isFavorite ? AiFillHeart : AiOutlineHeart;
  if (isLoading || clickedIsLoading) {
    return <ThreeDots
      color="white"
      visible={true}
      height={24}
      width={24}
    />
  }
  return (
    <>
      <Icon
        onClick={toggleFavorites}
        className='cursor-pointer text-red-600 sm:h-8 sm:w-8 h-10 w-10 md:w-6 md:h-6 '/>
    </>
  )
}
export default RecipePageHeaderFavoriteButton;