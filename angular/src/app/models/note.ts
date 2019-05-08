export class Note {
    public title = '';
    public text = '';

    constructor(
        text: string,
        title?: string
    ) {
        this.text = text;
        if (title) {
            this.title = title;
        }
    }

}
