const jobs = [
    // {
    //     id: 'a',
    //     deadline: 1,
    //     diff: 2
    // },
    // {
    //     id: 'c',
    //     deadline: 3,
    //     diff: 1
    // },
    {
        id: 'd',
        deadline: 6,
        diff: 2
    },
    // {
    //     id: 'b',
    //     deadline: 3,
    //     diff: 1
    // },
]

const sortJobs = (jobA, jobB) => {
    if (jobA.deadline > jobB.deadline) return -1;
    else if (jobA.deadline < jobB.deadline) return 1;
    else return 0;
}

// const scheduleJobs = (list) => {
//     list.sort(sortJobs);
//     const maxDealine = list[0].deadline;
//     const result = Array.from({ length: maxDealine }, () => null);

//     for (let i = maxDealine - 1; i >= 0; i--) {
//         console.log(`vou pro dia ${i}`)

//         let j = i;
//         const jobsForDay = [...list.filter(job => { if (job.deadline - 1 == i) return job; })];

//         console.log(`tenho tarefa pro dia ${i}??`)
//         if (jobsForDay.length) {
//             console.log('sim')
//             console.log(`dia está livre??`)

//             if (!result[i]) {
//                 console.log('sim', result)

//                 jobsForDay.forEach(element => {
//                     if (!result[j]) {
//                         for (let k = 0; k < element.diff && j - k >= 0; k++) {
//                             result[j - k] = element.id;
//                             console.log(j, k, result[j])
//                         }
//                     } else {
//                         while (result[j] && j >= 0) j -= 1;

//                         if (j >= 0) {
//                             for (let k = 0; k < element.diff && j - k >= 0; k++) {
//                                 result[j - k] = element.id;
//                                 console.log(j, k, result[j])
//                             }
//                         }
//                     }
//                 });
//             } else {
//                 console.log('nao', result)

//                 while (result[j] && j >= 0) j -= 1;

//                 if (j >= 0) {
//                     jobsForDay.forEach(element => {
//                         for (let k = 0; k < element.diff && j - k >= 0; k++) {
//                             result[j - k] = element.id;
//                             console.log(j, result[j])
//                         }
//                     });
//                 }
//             }
//         } else console.log('não', result)
//     }

//     console.log(result);
// }

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
                            result[j - k] = [element.id, j-k+1];
                        }
                    }
                });
            }
        }
    }

    console.log(result);
}


scheduleJobs(jobs);