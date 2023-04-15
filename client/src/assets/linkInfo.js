import { TbHomePlus, TbCoffee, TbChartInfographic } from "react-icons/tb"

const links = [
    {
        id: 1,
        name: 'All Cafes',
        path: 'all-cafes',
        icon: <TbCoffee />
    },
    {
        id: 2,
        name: 'Add a Cafe',
        path: 'add-cafe',
        icon: <TbHomePlus />
    },
    {
        id: 3,
        name: 'Profile',
        path: 'profile',
        icon: <TbChartInfographic />
    },
]

export default links