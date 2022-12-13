import { Option } from '../../components/app/app-select/app-select';
import { Colors } from './color.variables';

export const invoiceTypeList: Option[] = [
    {label: 'Стандарт', value: '0'},
    {label: 'Дополнительный', value: '1'},
    {label: 'Возмещение расходов (газ электроэнергия и др)', value: '2'},
    {label: 'Без оплаты', value: '3'},
    {label: 'Исправленный', value: '4'},
    {label: 'Исправленный (возмещение затрат)', value: '5'},
    {label: 'Дополнительный (возмещение затрат)', value: '6'}
];

export const ndsPercentsData: Option[] = [
    {label: 'Без НДС', value: ''},
    {label: '0%', value: '0'},
    {label: '15%', value: '15'}
];

export const unitsData: Option[] = [
    {label: '1000 куб. метр', value: 'cub'},
    {label: 'Дакика', value: '60s'}
];

export const codesList = [
    {
        id: '111',
        classifierCode: '11234556',
        classifierName: 'Усатновка техники'
    },
    {
        id: '222',
        classifierCode: '11234556',
        classifierName: 'Ремонт техники'
    },
    {
        id: '333',
        classifierCode: '11234556',
        classifierName: 'Чистка техники'
    }
];

export const newsList = [
    {
        id: '3322',
        title: 'Футбол 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, doloribus quas! Iusto quos quod dicta?',
        date: new Date()
    },
    {
        id: '3323',
        title: 'Баскетбол 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, doloribus quas! Iusto quos quod dicta?',
        date: new Date()
    },
    {
        id: '3324',
        title: 'Валебол 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, doloribus quas! Iusto quos quod dicta?',
        date: new Date()
    },
    {
        id: '3325',
        title: 'Хоккей 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, doloribus quas! Iusto quos quod dicta?',
        date: new Date()
    }
];

export const tariffsList = [
    {
        id: '123',
        name: 'Тариф 2500',
        price: 2500000,
        durationDay: 30,
        docs: 2500
    },
    {
        id: '124',
        name: 'Тариф 2000',
        price: 2200000,
        durationDay: 30,
        docs: 2000
    },
    {
        id: '125',
        name: 'Тариф 1500',
        price: 1800000,
        durationDay: 30,
        docs: 1500
    },
    {
        id: '126',
        name: 'Тариф 150',
        price: 150000,
        durationDay: 30,
        docs: 150
    }
]

export const docsStatus = {
    waiting_signature: {
        ru: {
            text: 'Ожидает вашей подписи',
            icon: '/icons/time.png',
            color: Colors.orange
        }
    },
    signed: {
        ru: {
            text: 'Подписан',
            icon: '/icons/seen.png',
            color: Colors.lightGreen
        }
    },
    draft: {
        ru: {
            text: 'Черновик',
            icon: '/icons/location.png',
            color: Colors.mediumGray
        }
    }
}

export const limitList = [4, 8, 12];

export const languageList: (Option & {icon: string})[] = [
    {label: 'Ру', value: 'ru', icon: '/icons/russia.png'},
    {label: 'Уз', value: 'uzk', icon: '/icons/uzbekistan.png'},
    {label: 'O\'z', value: 'uzl', icon: '/icons/uzbekistan.png'}
];

export const weeks = [
    'Воскресение',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Субота',
];

export const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
]