import moment from 'moment';

const expenses = [
    {
        id: 1,
        description: 'test1',
        amount: 100,
        createdAt: moment(0).add(9, 'days').valueOf()
    },
    {
        id: 3,
        description: 'test3',
        amount: 300,
        createdAt: moment(0).add(8, 'day').valueOf()
    },
    {
        id: 2,
        description: 'test2',
        amount: 200,
        createdAt: moment(0).add(7, 'day').valueOf()
    }
]

export default expenses