class Editor{
    constructor(dest = document.body){
        this.dest = dest;
    }

    add(){
        const editor = document.createElement("textarea");
        this.dest.append(editor);
    }
}

export default Editor;