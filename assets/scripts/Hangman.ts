// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Hangman extends cc.Component {

    button: cc.Node;
    word: cc.Node[];
    onLoad () {
        this.button = this.node.getChildByName("button");
        const labelNodes = this.node.getChildByName("Word").children;
        this.word = [];
        for (let i = 0;i<7;i++){
            this.word.push([]);
        }
        labelNodes.forEach(b => {
            const x = parseInt(b.name);
            this.word[x] = b;
        });
        
    }
    
    clickButton(){
       
    }
    start () {

    }

    // update (dt) {}
}
