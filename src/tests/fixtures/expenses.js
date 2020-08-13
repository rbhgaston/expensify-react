import moment from 'moment';

const expenses = [
    {
        id: '0',
        description: 'test0',
        amount: 100,
        createdAt: moment(0).add(9, 'days').valueOf()
    },
    {
        id: '1',
        description: 'test1',
        amount: 300,
        createdAt: moment(0).add(8, 'days').valueOf()
    },
    {
        id: '2',
        description: 'test2',
        amount: 200,
        createdAt: moment(0).add(7, 'days').valueOf()
    }
]

export const totalAmount = 600

export default expenses