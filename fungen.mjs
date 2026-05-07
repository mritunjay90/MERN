const gen = (g1) => {
    const pronouns = {
        male: "he",
        female: "she"
    };
    return pronouns[g1] || "they";
};

const _gen = gen("other");
console.log(_gen);
