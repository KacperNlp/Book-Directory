interface Comment {
    _id: string,
    author: string,
    content: string
}

interface Book {
    _id: string,
    title: string,
    author: string,
    categories: string[],
    comments?: Comment[],
    img?: string
}

export type { Book, Comment }