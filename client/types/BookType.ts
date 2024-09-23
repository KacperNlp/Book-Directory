interface Book {
    _id: string,
    title: string,
    author: string,
    categories: string[],
    img?: string
}

export type { Book }