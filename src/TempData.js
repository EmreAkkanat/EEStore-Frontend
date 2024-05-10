import { FaBars } from "react-icons/fa";

export const category = [
    {
        id: 1,
        name: "Tüm Kategoriler",
        icon: <FaBars />,
        sub_category: [
            {
                id: 2,
                name: "Giyim",
                sub_category: [
                    {
                        id: 1,
                        name: "Elbise"
                    },
                    {
                        id: 2,
                        name: "Pantolon"
                    },
                    {
                        id: 3,
                        name: "Tisört"
                    },
                    {
                        id: 4,
                        name: "Sweet"
                    },
                ]
            },
            {
                id: 1,
                name: "Ayakkabı",
                sub_category: [
                    {
                        id: 1,
                        name: "Outdoor"
                    },
                    {
                        id: 2,
                        name: "Spor"
                    },
                    {
                        id: 3,
                        name: "Topuklu Ayakkabı"
                    },
                    {
                        id: 4,
                        name: "Sneaker"
                    },
                    {
                        id: 5,
                        name: "Babet"
                    },
                    {
                        id: 6,
                        name: "Sandalet"
                    },
                    {
                        id: 7,
                        name: "Bot"
                    },
                    {
                        id: 8,
                        name: "Çizme"
                    },

                ]
            }
        ]
    },
    {
        id: 2,
        name: "Kadın",
        sub_category: []
    },
    {
        id: 3,
        name: "Erkek"
    },
    {
        id: 4,
        name: "Ev & Yaşam"
    },
    {
        id: 5,
        name: "Kozmetik"
    },

    {
        id: 6,
        name: "Ayakkabı & Çanta"
    },
    {
        id: 7,
        name: "Elektronik"
    },
    {
        id: 8,
        name: "Spor & Outdoor"
    },
];