import User from "../Interfaces/User";

function getNames(): User[] {
    return [
        {
            age: 38,
            description: "programmer",
            first: "Onno",
            id: 1,
            last: "Invernizzi",
            thumbnail: "none",    
        },
        {
            age: 35,
            description: "mummah",
            first: "Femkje",
            id: 2,
            last: "Akkerman",
            thumbnail: "none",
        },
        {
            age: 5,
            description: "dochter",
            first: "Nora Linde",
            id: 3,
            last: "Invernizzi",
            thumbnail: "",
        },
        {
            age: 0,
            description: "zoon",
            first: "Quentin",
            id: 4,
            last: "Invernizzi",
            thumbnail: "None."
        }
    ] as User[];
}

export default getNames;