const foodByMood = {
  Cozy: [
    {
      name: "Maggi",
      image:
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFnZ2klMjBub29kbGVzfGVufDB8fDB8fHww",
    },
    {
      name: "Pakora",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
    },
    {
      name: "Hot Coffee",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
      name: "Grilled Sandwich",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    },
  ],

  Energetic: [
    {
      name: "Fruit Bowl",
      image:
        "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXQlMjBib3dsfGVufDB8fDB8fHww",
    },
    {
      name: "Smoothie",
      image:
        "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNtb290aGllfGVufDB8fDB8fHww",
    },
    {
      name: "Oatmeal",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    },
    {
      name: "Avocado Toast",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
    },
  ],

  Chill: [
    {
      name: "Burger",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },
    {
      name: "Fries",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
    },
    {
      name: "Cold Coffee",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    },
    {
      name: "Pizza Slice",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    },
  ],

  Lazy: [
    {
      name: "Khichdi",
      image: "https://images.unsplash.com/photo-1626509653291-2c4a5b6bcb55",
    },
    {
      name: "Soup",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
    },
    {
      name: "Hot Chocolate",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    },
    {
      name: "Paneer Curry",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7",
    },
  ],
};

export default function FoodSection({ mood }) {
  const slots = new Array(4).fill(null);

  const foods = mood && foodByMood[mood] ? foodByMood[mood] : [];

  return (
    <section className="w-full">
      <h2 className="text-2xl font-semibold mb-4">🍲 What to Eat</h2>

      <div className="grid grid-cols-4 gap-6 w-full">
        {slots.map((_, index) => {
          const food = foods[index];

          return (
            <div
              key={index}
              className="h-40 rounded-xl flex items-end justify-center p-2 text-sm font-medium shadow-md bg-surface text-bg"
              style={{
                backgroundImage: food
                  ? `linear-gradient(
          rgba(0,0,0,0.25),
          rgba(0,0,0,0.25)
        ), url(${food.image})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {food ? food.name : ""}
            </div>
          );
        })}
      </div>
    </section>
  );
}
