import { defineStore } from "pinia";

export const useNavStore = defineStore('navStore', {
    state: () => {
        return {
            isOpened: false,
            navLinks: [
                {
                    id: 1,
                    name: 'Материнские платы',
                    path: 'motherboards',
                },{
                    id: 2,
                    name: 'Процессоры',
                    path: 'cpu',
                },{
                    id: 3,
                    name: 'ОЗУ',
                    path: 'ram',
                },{
                    id: 4,
                    name: 'Блоки питания',
                    path: 'powerunits',
                },{
                    id: 5,
                    name: 'Видеокарты',
                    path: 'graphiccards',
                },{
                    id: 6,
                    name: 'Жесткие диски',
                    path: 'hdd',
                },{
                    id: 7,
                    name: 'Кулеры',
                    path: 'fans',
                },{
                    id: 8,
                    name: 'Корпусы',
                    path: 'cases',
                },{
                    id: 9,
                    name: 'Мониторы',
                    path: 'monitor',
                },{
                    id: 10,
                    name: 'Клавиатуры',
                    path: 'keyboards',
                },{
                    id: 11,
                    name: 'Мыши',
                    path: 'mouses',
                },{
                    id: 12,
                    name: 'Колонки',
                    path: 'speakers',
                },{
                    id: 13,
                    name: 'Наушники',
                    path: 'headphones',
                },{
                    id: 14,
                    name: 'Игровые консоли',
                    path: 'consoles',
                },{
                    id: 15,
                    name: 'Геймпады',
                    path: 'gamepads',
                },{
                    id: 16,
                    name: 'Аксессуары',
                    path: 'accessories',
                },
            ]
        }
    },
    actions: {
        navToggle() {
            this.isOpened = !this.isOpened;
        }
    }
})