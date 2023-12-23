
import React from "react";
import {IconType} from "react-icons";


interface ProductPageContentSectionProps {
  children: React.ReactNode;
  header: string | React.ReactNode;
  className?: string;
  icon?: IconType;
}

const ProductPageContentSection: React.FC<ProductPageContentSectionProps> = ({
                                                                             children,
                                                                             header,
                                                                             className,
                                                                             icon: Icon
                                                                           }) => {
  return (
    <div className={className}>
      <div className='flex items-center'>
        {Icon
          ?
          <h1>
            <Icon className='lg:w-8 lg:h-8 md:h-10 md:w-10 sm:h-12 sm:w-12 w-14 h-14'/>
          </h1>
          : null}

        <h1 className='text-5xl sm:text-4xl md:text-3xl lg:text-2xl'>
          {header}
        </h1>

      </div>
      <div className="text-md md:text-sm mt-2">

        {children}
      </div>
    </div>
  )
}

export default ProductPageContentSection;