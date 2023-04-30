class Keyboard{
    constructor(dest = document.body, platform = "basic"){
        this.dest = dest;
        this.platform = platform;
    }

    add(){
        this.keyboard = document.createElement("div");
        this.keyboard.className = "keyboard";
        this.dest.append(this.keyboard);

        this.row0 = document.createElement("div");
        this.row0.className = "row";
        this.keyboard.append(this.row0);

        this.row1 = document.createElement("div");
        this.row1.className = "row";
        this.keyboard.append(this.row1);

        this.row2 = document.createElement("div");
        this.row2.className = "row";
        this.keyboard.append(this.row2);

        this.row3 = document.createElement("div");
        this.row3.className = "row";
        this.keyboard.append(this.row3);

        this.row4 = document.createElement("div");
        this.row4.className = "row";
        this.keyboard.append(this.row4);
    }

    addButton(row, symbol, modifier, type='basic'){
        row = `row${row}`
        const button = document.createElement("div");

        switch (type){
            case "basic":
                button.className="basic-button";
                break;
            case "backspace-button":
                button.className="backspace-button";
                break;
            case "ctrl-button":
                button.className="ctrl-button";
                break;
            case "enter-button":
                button.className="enter-button";
                break;
            case "meta-basic-button":
                button.className="meta-basic-button";
                break;
            case "meta-button":
                button.className="meta-button";
                break;
            case "space-button":
                button.className="space-button";
                break;
            case "tab-button":
                button.className="tab-button";
                break;
            case "tilda-button":
                button.className="tilda-button";
                break;
        }
        
        button.textContent = symbol;

        if(modifier){
            const buttonModifier = document.createElement("div");
            buttonModifier.className="button-modifier";
            buttonModifier.textContent = modifier;
            button.append(buttonModifier);
        }

        this[row].append(button);
    }
}

export default Keyboard;