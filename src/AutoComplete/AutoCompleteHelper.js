// This is not a production-ready function.
// Instead of using a mocked variable to search for suitable options, I'd ideally request those values from a REST Api.
// Also, filtering it in the frontend may not be ideal, if we're searching in a big set of values, the application's performance might be compromised.
export function searchOptions(query) {
  //Some animes I like =)
  const options = [
    "One Piece",
    "Naruto",
    "Demon Slayer",
    "Haikyuu!",
    "Ghost In The Shell",
    "Pokémon",
    "Dragon Ball",
    "Cowboy Bebop",
    "K-On",
    "Inuyasha",
    "Shokugeki No Soma",
    "Bleach",
  ];

  // I won't check for reject() because there's no way of getting an exception from filter().
  // Also, I could've come up with a better way of filtering the values, it's pretty basic right now, just checking for includes().
  // But it's definitely possible to use a better matching algorithm.
  return new Promise((resolve) => {
    // When query is empty, I don't wanna show every possible value.
    const filteredOptions = options.filter(
      (o) =>
        query !== "" &&
        o !== "" &&
        o.toLowerCase().includes(query.toLowerCase())
    );
    resolve(filteredOptions);
  });
}
