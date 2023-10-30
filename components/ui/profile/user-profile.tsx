// Import necessary modules and components
'use client'
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/user-provider";
import { formatDateTime } from "@/utils/formatters";
import ImageUpload from "@/components/ui/image-upload";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import axios from "axios";
import { toast } from "react-toastify";
import { CiTrash } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Header from "@/components/ui/header";
import { getProduct, getRecipe } from "@/utils/get-recipe";
import Recipes from "@/components/ui/recipes/recipes";
import Products from "@/components/ui/products/products";

// Define interfaces for form data and errors
interface FormData {
  image: string;
  name: string;
}

interface Errors {
  name: string;
  image: string;
}

// Default background image URL
const defaultBackgroundImageUrl = "https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg";

// UserProfile component
const UserProfile: React.FC = () => {
  // Get user data from context
  const { data: user, isLoading, mutate } = useContext(AuthContext);

  // State variables
  const [editMode, setEditMode] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    image: user?.image || "",
    name: user?.name || "",
  });
  const [errors, setErrors] = useState<Errors>({ name: "", image: "" });

  // Calculate background image URL and apply styling
  const backgroundImageUrl = formData.image || defaultBackgroundImageUrl;
  const style = {
    backgroundImage: `url('${backgroundImageUrl}')`,
  };

  // Initialize router for navigation
  const router = useRouter();

  // Update form data when user's image or name change
  useEffect(() => {
    setFormData({
      image: user?.image,
      name: user?.name,
    });
  }, [user?.image, user?.name]);

  // Reset form to original data
  const reset = useCallback(() => {
    setEditMode(false);
    setFormData({
      image: user?.image || "",
      name: user?.name || "",
    });
  }, [user?.image, user?.name]);

  // Handle image removal
  const handleImageRemove = () => {
    setFormData({ ...formData, image: "" });
    toast.success("Image removed");
  };

  // Handle image change
  const handleImageChange = (url: string) => {
    setFormData({ ...formData, image: url });
    toast.success("Image changed");
  };

  // Handle cancel edit
  const handleCancel = () => {
    reset();
  };

  // Handle form submission
  const onSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`/api/profile/${user?.id}/edit`, formData);

      if (response.status === 200) {
        toast.success("Profile edited successfully");
        mutate({ ...user, ...formData });
        router.refresh();
        setEditMode(false);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.error);
      setErrors({
        ...errors,
        [error.response.data.field]: error.response.data.error,
      });
    }
    console.log('rerender submit');
  }, [errors, formData, mutate, router, user]);

  if (isLoading) {
    return <p>Is loading...</p>;
  }
  if (!user) {
    return null;
  }
  console.log(user)
  // Return the user profile UI
  return (
    <div className="relative w-full h-full">
      <div className={`flex flex-col h-full w-full  md:flex-row`}>
        <div style={style} className={`rounded-full bg-center bg-no-repeat bg-cover md:h-48 md:w-48 h-96 w-96 relative`}>
          {editMode && (
            <>
              <button
                onClick={handleImageRemove}
                className="flex items-center p-3 md:p-2 justify-center absolute md:w-10 md:h-10 w-20 h-20 top-10 md:top-5 md:left-2.5 left-5 hover:bg-red-400 border transition-transform rounded-xl z-20"
              >
                <CiTrash className="w-full h-full" />
              </button>
              <button
                className="flex items-center md:p-2 p-3 justify-center absolute md:w-10 md:h-10 w-20 h-20 bottom-10 md:bottom-5 md:right-2.5 right-5 hover:bg-zinc-300 transition-transform bg-zinc-200 border rounded-full z-20"
              >
                <ImageUpload onChange={handleImageChange} onRemove={handleImageRemove} />
              </button>
            </>
          )}
        </div>
        <div className="flex flex-col h-full ml-4 mt-8">
          {editMode ? (
            <form className="gap-y-5" onSubmit={onSubmit}>
              <Input
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                id="name"
                label="Name"
                error={errors.name}
              />
              <div className="flex mt-4 ml-2 gap-x-3 items-center">
                <Button className="text-xl md:text-lg px-5 py-4 md:px-4 md:py-2 bg-green-600" type="submit">
                  Save
                </Button>
                <Button onClick={handleCancel} className="text-xl md:text-lg px-5 py-4 md:px-4 md:py-2 bg-zinc-200 text-red-600 ">
                  Cancel
                </Button>
              </div>
            </form>
          ) : (
            <>
              <Header className="md:text-start text-7xl sm:text-6xl md:text-5xl">{user?.name}</Header>
              <p className="truncate text-zinc-500 -mt-0.5 sm:text-md md:text-sm">
                Joined {formatDateTime(user?.createdAt)}
              </p>
            </>
          )}
        </div>
      </div>
      {!editMode && (
        <div className="flex w-full md:w-48 md:px-4 h-full">
          <Button className="bg-blue-600 w-full md:justify-self-center  px-5 py-4 md:px-4 md:py-2 md:text-lg text-3xl  ml-4 md:ml-0 mt-2" onClick={() => setEditMode(true)}>
            Edit profile
          </Button>
        </div>)
      }

      {/* ... Rest of the code */}
    </div>
  );
};

export default UserProfile;
