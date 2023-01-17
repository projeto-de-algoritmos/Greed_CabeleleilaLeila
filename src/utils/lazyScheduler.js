// const jobs = [
//     {
//         id: 'a',
//         deadline: 1,
//         diff: 1
//     },
//     {
//         id: 'c',
//         deadline: 3,
//         diff: 1
//     },
//     {
//         id: 'd',
//         deadline: 6,
//         diff: 2
//     },
//     {
//         id: 'b',
//         deadline: 3,
//         diff: 1
//     },
// ]

const sortJobs = (jobA, jobB) => {
    if (jobA.deadline > jobB.deadline) return -1;
    else if (jobA.deadline < jobB.deadline) return 1;
    else return 0;
}

export const scheduleJobs = (list) => {
    list.sort(sortJobs);
    const maxDealine = list[0].deadline;
    const result = Array.from({ length: maxDealine }, () => null);

    for (let i = maxDealine - 1; i >= 0; i--) {
        let j = i;
        const jobsForDay = [...list.filter(job => { if (job.deadline - 1 == i) return job; })];

        if (jobsForDay.length) {
            while (result[j] && j >= 0) j -= 1;

            if (j >= 0) {
                jobsForDay.forEach(element => {
                    while (result[j] && j >= 0) j -= 1;

                    if (j >= 0) {
                        for (let k = 0; k < element.diff && j - k >= 0; k++) {
                            result[j - k] = {
                                name: element.name,
                                dayNum: j - k + 1
                            };
                        }
                    }
                });
            }
        }
    }

    return result;
}