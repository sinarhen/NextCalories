import {getNutrients, getProduct} from "@/utils/get-recipe";
import PageContainer from "@/components/ui/page-container";
import ProductPageHeader from "@/components/ui/product/product-page-header";
import ProductPageContent from "@/components/ui/product/product-page-content";
import Navbar from "@/components/ui/navbar/navbar";


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
  const productNutritions = await getNutrients(params.productId)
  const product = {...productNutritions, ...productGenerics};

  return (
    <>
      <Navbar/>
      <ProductPageHeader product={product}/>
      <PageContainer>
        <ProductPageContent product={product}/>
      </PageContainer>
    </>
  )
}

export default RecipePage;