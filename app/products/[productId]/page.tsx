import {getNutrients, getProduct} from "@/utils/get-recipe";
import PageContainer from "@/components/ui/page-container";
import ProductPageHeader from "@/components/ui/product/product-page-header";
import ProductPageContent from "@/components/ui/product/product-page-content";
import Navbar from "@/components/ui/navbar/navbar";
import {Metadata} from "next";
import Header from "@/components/ui/header";

export const metadata: Metadata = {
  title: 'Product',
}

const RecipePage = async (
  {
    params
  }:
    {
      params: {
        productId: string
      }
    }
) => {
  const productGenerics = await getProduct(params.productId)
  const ProductNutrients = await getNutrients(params.productId)
  const product = {...ProductNutrients, ...productGenerics};
  console.log(productGenerics)
  return (
    <>
      <Navbar/>
      {ProductNutrients ? <>
        <ProductPageHeader product={product}/>
        <PageContainer>
          <ProductPageContent product={product}/>
        </PageContainer>
      </>

      : <Header>No data found</Header>
      }
      </>
  )
}

export default RecipePage;