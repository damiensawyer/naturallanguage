export class Question {
    id: number;
    question: string;

    Create(id: number, question: string): Question {
        return { id: id, question: question } as Question;
    }
}
