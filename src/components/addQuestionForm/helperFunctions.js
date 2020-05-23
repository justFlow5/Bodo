export const saveNumbers = () => {
    const allQ = JSON.parse(localStorage.getItem('questions'));

    const numOfTech = Object.keys(allQ).map((tech) => {
        return [tech, allQ[tech].length, allQ[tech][0].job];
    });

    localStorage.setItem('numOfTech', JSON.stringify(numOfTech));
};