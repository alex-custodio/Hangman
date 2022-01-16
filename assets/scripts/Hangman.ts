// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Hangman extends cc.Component {
    //nodes definition
    button: cc.Node;
    word: cc.Node[];
    editBox: cc.Node;
    onLoad () {
        // hidden word: rebirth
        const h_w = ["R", "E", "B","I", "R", "T", "H"];
        // conecting the editbox node
        this.editBox = this.node.getChildByName("editbox");
        //creating the button node and the first config to the word letters list
        this.button = this.node.getChildByName("button");
        const labelNodes = this.node.getChildByName("Word").children;
        this.word = [];
        //building the word letters list
        for (let i = 0;i<7;i++){
            this.word.push([]);
        }
        //adding nodes to the list
        labelNodes.forEach(b => {
            const x = parseInt(b.name);
            this.word[x] = b;
        });
    }
    getStringFromLabel(w: cc.Node): string {
        return w.getComponent(cc.Label).string;
    }

    clickButton(){
       const value = this.editBox.getChildByName("TEXT_LABEL").getComponent(cc.Label);
       
    }
    checkIfLetterExists(l: cc.Label){
        for (let i = 0; i<7; i++){
            if (this.h_w[i] = l){
                
            }
        }
    }
    start () {

    }

    // update (dt) {}
}
