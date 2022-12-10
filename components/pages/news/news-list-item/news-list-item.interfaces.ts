
export interface INews {
    id: string;
    title: string;
    description: string;
    date: Date;
}

export interface INewsListItemProps {
    news: INews;
}