export class Note {
    public title = '';
    public text = '';
    public date: Date;

    constructor(
        text: string,
        title?: string,
        date?: Date
    ) {
        this.text = text;
        if (title) {
            this.title = title;
        }
        if (date) {
            this.date = date;
        }
    }

}
