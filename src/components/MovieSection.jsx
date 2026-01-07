const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const moviesByMood = {
  "Cozy": [
    { name: "About Time", image: "https://image.tmdb.org/t/p/w500/qw3J9cNeLioOLoR68WX7z79aCdK.jpg" },
    { name: "Little Women", image: "https://image.tmdb.org/t/p/w500/yn5ihODtZ7ofn8pDYfxCmxh8AXI.jpg" },
    { name: "Julie & Julia", image: "https://image.tmdb.org/t/p/w500/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg" },
    { name: "The Holiday", image: "https://image.tmdb.org/t/p/w500/5t7KJkzR2o0VhZ5xQ2lY9zFJYQk.jpg" },
    { name: "Before Sunrise", image: "https://image.tmdb.org/t/p/w500/8eP6zP0k5x2lDmdQk6x8b1xFJz.jpg" },
    { name: "Midnight in Paris", image: "https://image.tmdb.org/t/p/w500/4wZx8ZJ5Jk6Jj5n2kN5nFQxkF9.jpg" },
    { name: "Her", image: "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg" },
    { name: "Brooklyn", image: "https://image.tmdb.org/t/p/w500/qz1C1oDq7rZ2n7qFzYF4Hj7zQ1x.jpg" },
  ],

  "Energetic": [
    { name: "Rocky", image: "https://image.tmdb.org/t/p/w500/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg" },
    { name: "Whiplash", image: "https://image.tmdb.org/t/p/w500/6uSPcdG8R9L8J4qFQk1f5F4Xx0C.jpg" },
    { name: "Creed", image: "https://image.tmdb.org/t/p/w500/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg" },
    { name: "Rush", image: "https://image.tmdb.org/t/p/w500/5lAMQMWpXMsirvtLLvW7cJgEPkU.jpg" },
    { name: "Ford v Ferrari", image: "https://image.tmdb.org/t/p/w500/dR1Ju50iudrOh3YgfwkAU1g2HZe.jpg" },
    { name: "The Social Network", image: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg" },
    { name: "Moneyball", image: "https://image.tmdb.org/t/p/w500/3oAa8mJJ97CH9AeGEY6vjAxqcvZ.jpg" },
    { name: "Mad Max: Fury Road", image: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg" },
  ],

  "Chill": [
    { name: "The Nice Guys", image: "https://image.tmdb.org/t/p/w500/7C6tZJ4M9RZz8XkJw9jD6Y7J2wO.jpg" },
    { name: "Ocean’s Eleven", image: "https://image.tmdb.org/t/p/w500/o0h76DVXvk5OKjmNez5YY0GODC2.jpg" },
    { name: "The Big Lebowski", image: "https://image.tmdb.org/t/p/w500/9mprbw31MGdd66LR0AQKoDMoFRv.jpg" },
    { name: "Catch Me If You Can", image: "https://image.tmdb.org/t/p/w500/sdYgEkKCDPWNU6KnoL4qd8xZ4w7.jpg" },
    { name: "Once Upon a Time in Hollywood", image: "https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg" },
    { name: "Palm Springs", image: "https://image.tmdb.org/t/p/w500/yf5IuMW6GHghu39kxA0oFx7Bxmj.jpg" },
    { name: "The Grand Budapest Hotel", image: "https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg" },
    { name: "Lost in Translation", image: "https://image.tmdb.org/t/p/w500/wrDkLkE2H1sG4OQ3K9G1LZzF5pC.jpg" },
  ],

  "Lazy": [
    { name: "Harry Potter", image: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg" },
    { name: "Home Alone", image: "https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg" },
    { name: "Paddington", image: "https://image.tmdb.org/t/p/w500/hcX1l5I0Vtlg4kYp4b6j6Tq8XyG.jpg" },
    { name: "The Intern", image: "https://image.tmdb.org/t/p/w500/9z4jRr43JdtU66P0iy8h18OyLql.jpg" },
    { name: "Chef", image: "https://image.tmdb.org/t/p/w500/7gKz1yKXH7OqzE7F2zM2zH4Z4Z7.jpg" },
    { name: "Fantastic Mr. Fox", image: "https://image.tmdb.org/t/p/w500/8Y7WrY2dH4XK2hU3OQq3q3QK1ZP.jpg" },
    { name: "Studio Ghibli Collection", image: "https://image.tmdb.org/t/p/w500/np0B8Sg6ZxP9H8h8tqj5Q9Z8B5Z.jpg" },
    { name: "The Secret Life of Walter Mitty", image: "https://image.tmdb.org/t/p/w500/3f4t3xM2q1Yp8p6j5Q9Z7Y3Z9Z.jpg" },
  ],
};

export default function MovieSection({ mood }) {
  const slots = new Array(4).fill(null);
  const movies = mood && moviesByMood[mood] ? shuffle(moviesByMood[mood]) : [];

  return (
    <section className="w-full">
      <h2 className="text-2xl font-semibold mb-4">🎬 What to Watch</h2>

      <div className="grid grid-cols-4 gap-6 w-full">
        {slots.map((_, index) => {
          const movie = movies[index];

          return (
            <div
              key={index}
              className="aspect-[2/3] rounded-xl flex items-end justify-center p-2 text-sm font-medium shadow-md"
              style={{
                backgroundColor: movie ? "transparent" : "#E7DFD6",
                backgroundImage: movie
                  ? `linear-gradient(
                      rgba(0,0,0,0.35),
                      rgba(0,0,0,0.35)
                    ), url(${movie.image})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#FEF9E1",
              }}
            >
              {movie ? movie.name : ""}
            </div>
          );
        })}
      </div>
    </section>
  );
}
