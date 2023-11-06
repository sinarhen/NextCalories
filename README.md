# Recipe Tracking Website
**Version:** 0.1b
made with: Next 13, Prisma, Supabase, 
## Website Review

### Landing page
The landing page contains these three unique sections:
- **Recipes Searching Section**
- **Products Searching Section**
- **Random Recipes Overview**
- **Authentication Section**

**Images:**
![image](https://github.com/sinarhen/NextCalories/assets/105736826/ca3b5efd-9a6d-4c5f-ab83-04007caaf85f)
![image](https://github.com/sinarhen/NextCalories/assets/105736826/12f7c22a-b7a2-4967-ad4e-3684e25d0fa3)

#### Recipes searching section
- Recipes searching takes an input and then redirects you to `/recipes?q=<your_input>`.
- Input example: "BBQ"

![ezgif com-video-to-gif (4)](https://github.com/sinarhen/NextCalories/assets/105736826/9eb4f599-e22c-4e4e-9ab3-4018e99ab738)

#### Products searching section
- Products searching takes an input and then redirects you to `/products?q=<your_input>`.
- Input example: "Ginger"
![image](https://github.com/sinarhen/NextCalories/assets/105736826/6028b8dd-afda-4829-b668-982230713f4a)
- Redirected to `/products?q=Ginger`
![image](https://github.com/sinarhen/NextCalories/assets/105736826/f906f548-f941-4665-a690-bb834f7a4199)

### Recipes Page
- Route: *"/recipes"*
- Authentication required
- Provides selectable filters, input query, and recipes themselves.
- How it works: If there is no search parameter (`?q`), it generates some random recipes. If `q` exists, it makes a request to the database, executing all data relevant to that query. If filters like mealType, health, diet, cuisineType, dishType exist, the filters are also applied to the query to the database.
- Search params: q, mealType, health, diet, cuisineType, dishType, page
- Pagination in bottom

![ezgif com-optimize (1)](https://github.com/sinarhen/NextCalories/assets/105736826/5aaf83d8-ff8a-45e2-8029-3f923aba076d)



### Products Page
- Route: *"/products"*
- Authentication required
- Works the same way as the Recipes Page but uses another API.

![ezgif com-optimize](https://github.com/sinarhen/NextCalories/assets/105736826/fcb33f17-4a41-4aff-b3dc-00b111257c1c)


### Authentication Page
- Route: *"/auth"*
- Provides two variants of the form (login and register).
- Users can change the form by clicking on a button below the header or manually by changing search parameters with `?variant=<"login" or "register">`.
- Performs validation with Zod schema.
- Password length must be more than 8 characters.
- Name is not required, but email is required and must be valid.
- Search params: variant, email

![ezgif com-video-to-gif (2)](https://github.com/sinarhen/NextCalories/assets/105736826/09d8e019-960f-4567-b71a-6668b5b4cc72)

### User Profile
- Route: *"/profile"*
- Authentication Required.
- Allows users to view favorite recipes and products and change their user profile avatar and name.

![ezgif com-video-to-gif (1)](https://github.com/sinarhen/NextCalories/assets/105736826/92e673fb-f836-47f5-a790-3c02aa1195d4)


### Single Recipe Page
- Route: `/recipes/<recipe_id>`
- Provides detailed information about a specific recipe.
- Allows users to add the recipe to favorites.
- Includes a Calories Calculator.
- Displays Burning Time information.
- Shows the list of ingredients for the recipe.
- Presents a Nutrients Table for the recipe.

![ezgif com-video-to-gif](https://github.com/sinarhen/NextCalories/assets/105736826/1cec4669-b2f6-433d-8515-efbffa7f789d)


### Concrete Product Page
- Route: "/products/<product_id>"
- Offers the same functionality as the Concrete Recipe Page.

### About Page
- Route: "/about"
- Provides general information about the site.

### Contacts Page
- Route: "/contacts"
- Offers contact information.

### All Pages
- Include a Navbar and Footer.

#### Navbar
- Fully responsive.
- Includes a logo section, pages section, and authentication section.

![ezgif com-video-to-gif (5)](https://github.com/sinarhen/NextCalories/assets/105736826/79b1126e-0b4d-4f99-9c03-09827184454d)

#### Footer
- Includes links such as API source, API docs, About, and Contacts.
- Fully responsive.

![image](https://github.com/sinarhen/NextCalories/assets/105736826/2f53ebdf-aa32-4b34-837d-f3d075187cb3)

## Responsiveness
- All pages are responsive.

Examples:
![Знімок екрана 2023-11-04 в 01 27 05](https://github.com/sinarhen/NextCalories/assets/105736826/a9b11d1a-a51f-4db4-bba4-1902b6ba541b)
![Знімок екрана 2023-11-04 в 01 27 00](https://github.com/sinarhen/NextCalories/assets/105736826/cd730798-c040-4c3d-bc18-463d8f86e51d)
![Знімок екрана 2023-11-04 в 01 26 47](https://github.com/sinarhen/NextCalories/assets/105736826/bc02eeee-7561-4903-842c-81fc13d7bd48)
![Знімок екрана 2023-11-04 в 01 26 29](https://github.com/sinarhen/NextCalories/assets/105736826/403f9574-5d1a-41ca-9943-a97b67e18137)
![Знімок екрана 2023-11-04 в 01 26 08](https://github.com/sinarhen/NextCalories/assets/105736826/5eeb2c99-d2d3-4aa6-b6f8-2dc9a9b7fe32)
![Знімок екрана 2023-11-04 в 01 25 53](https://github.com/sinarhen/NextCalories/assets/105736826/e0fbfa6e-7735-490f-8895-a4569dc9590a)
![Знімок екрана 2023-11-04 в 01 27 48](https://github.com/sinarhen/NextCalories/assets/105736826/afe676ed-955d-4e2c-b989-b28fee3d3e38)
![Знімок екрана 2023-11-04 в 01 27 34](https://github.com/sinarhen/NextCalories/assets/105736826/e5614f4c-e167-41c0-a90d-2d603ffed5d2)


### App for tracking recipes and generic foods calories
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started
First, run the development server using one of these commands:
- `npm run dev`
- `yarn dev`
- `pnpm dev`
- `bun dev`
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
