"use client";

import {CldUploadWidget} from 'next-cloudinary';
import React, {useEffect, useState} from 'react';
import {CiEdit} from "react-icons/ci";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
                                                   onChange,
                                                 }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className='w-full h-full'>
      <CldUploadWidget onUpload={onUpload} uploadPreset="tp9j3uev">
        {({open}) => {
          const onClick = () => {
            open();
          };

          return (
            <CiEdit onClick={onClick} className='h-full w-full '/>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}

export default ImageUpload;