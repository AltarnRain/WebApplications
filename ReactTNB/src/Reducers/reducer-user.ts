import User from "../Interfaces/User";

const getNames = (): User[] => {
    return [
        {
            age: 38,
            description: "programmer",
            first: "Piet",
            id: 1,
            last: "Keizer",
            thumbnail: "none",    
        },
        {
            age: 35,
            description: "mummah",
            first: "Laura",
            id: 2,
            last: "Keizer",
            thumbnail: "none",
        },
        {
            age: 5,
            description: "dochter",
            first: "Sofie",
            id: 3,
            last: "Keizer",
            thumbnail: "",
        },
        {
            age: 0,
            description: "zoon",
            first: "Quentin",
            id: 4,
            last: "Keizer",
            thumbnail: "None."
        }
    ] as User[];
};

export default getNames;