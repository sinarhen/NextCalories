import PageContainer from "@/components/ui/page-container";
import Header from "@/components/ui/header";
import Header2 from "@/components/ui/header2";
import AuthSection from "@/components/ui/auth-section";
import Navbar from "@/components/ui/navbar/navbar";

export default function AboutPage() {
  return (
    <>

    <Navbar />
    <PageContainer>
      <Header>
        About Us
      </Header>
      <div className='relative w-full h-full'>
        <p>
          Welcome to Calories, your go-to destination for exploring delicious recipes while keeping a close eye on the
          nutritional content and calorie count. Whether you are a seasoned home chef or just starting your culinary
          journey, we have got you covered with a vast collection of recipes that cater to various dietary needs and
          preferences.
        </p>
        <Header2>Discover Diverse Recipes</Header2>
        <p>
          Our website offers an extensive library of recipes that span across different cuisines and meal categories.
          From mouthwatering main courses to delectable desserts and everything in between, you will find recipes that
          will satisfy your cravings and culinary curiosity.
        </p>
        <Header2>Nutrition at Your Fingertips</Header2>
        <p>
          We understand that a healthy diet is a crucial part of your well-being. Thats why we provide comprehensive
          nutritional information for each recipe. Easily access details on essential nutrients such as protein,
          carbohydrates, fats, vitamins, and minerals. Make informed choices about your meals and align them with your
          dietary goals.
        </p>
        <Header2>Calorie Conscious Cooking</Header2>
        <p>
          For those who are conscious of their calorie intake, our website makes it simple to search for recipes that
          fit your calorie budget. Filter recipes by calorie range, so you can find delicious options that wont
          compromise your fitness and health goals.
        </p>
        <Header2>Personalized Experience</Header2>
        <p>
          Create a personalized profile to save your favorite recipes and easily track your daily nutrient intake. Set
          dietary preferences, allergies, or restrictions, and we will tailor our recipe recommendations to your specific
          needs.
        </p>
        <Header2>Explore and Learn</Header2>
        <p>
          In addition to recipes, we offer informative articles and resources on nutrition, cooking techniques, and
          healthy eating tips. You will find everything you need to enhance your culinary skills and make informed food
          choices.
        </p>
        <Header2>Join Our Community</Header2>
        <p>
          Connect with a community of fellow food enthusiasts, share your own culinary creations, and exchange cooking
          tips and tricks. We believe that the joy of cooking is best when shared with others.
        </p>
        <p>
          Start your culinary journey with us today. Search for recipes, discover the nutritional value of your favorite
          meals, and make conscious choices for a healthier, happier you. Enjoy the flavors, savor the nutrients, and
          relish every bite!
        </p>
      </div>
    </PageContainer>
    <AuthSection/>
  </>
  )
}
