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
    // hidden word: rebirth
    h_w: [string, string, string, string, string, string, string];
    @property(cc.Label)
    errorLabel: cc.Label = null;
    @property(cc.Node)
    anchor: cc.Node = null;
    @property(cc.Node)
    surprise: cc.Node = null;
    errorPoints: number;
    win: number;
    hanged: cc.Node[];
    onLoad () {
        this.win = 0;
        this.errorPoints = 0;
        this.h_w = ["R", "E", "B","I", "R", "T", "H"];
        // conecting the editbox node
        this.editBox = this.node.getChildByName("editbox");
        //creating the button node and the first config to the word letters list
        this.button = this.node.getChildByName("button");
        const labelNodes = this.node.getChildByName("Word").children;
        this.word = [];
        //building the word letters list
        for (let i = 0;i<7;i++){
            this.word.push();
        }
        //adding nodes to the list
        labelNodes.forEach(b => {
            const x = parseInt(b.name);
            this.word[x] = b;
        });
        this.buildHangedNodesList();
        
    }
    buildHangedNodesList(){
        const nodes = this.node.getChildByName("hanged").children;
        this.hanged = [];
        for (let i = 0; i<6;i++){
            this.hanged.push();
        }
        nodes.forEach(b => {
            const x = parseInt(b.name);
            this.hanged[x] = b;
        });
    }
    clickButton(){
       var aux = 0;
       
       const value = this.editBox.getChildByName("TEXT_LABEL").getComponent(cc.Label).string;
       for (let i = 0; i < 7; i++){
           if (this.h_w[i] == value.toUpperCase()){
                
                this.word[i].getComponent(cc.Label).string = value.toUpperCase();
                aux += 1;
                this.win += 1;
                if (this.win == 7){
                    this.endGameWinning();
                }
           }
           else if (i == 6 && aux == 0){
              this.errorPoints += 1;
              this.errorLabel.string = `Erros: ${this.errorPoints}`
              this.hanged[this.errorPoints - 1].active = true;
              if (this.errorPoints == 6){
                  this.endGameLosing();
              }
           }
       }
       
    }
    endGameLosing(){
        this.editBox.active = false;
        this.button.active = false;
        const nodeLabel = new cc.Node("LabelTop");
        nodeLabel.addComponent(cc.Label);
        nodeLabel.getComponent(cc.Label).string = "You lose haahshuashusjsdkskdksaka";
        this.anchor.addChild(nodeLabel);
        setTimeout(() => {
           this.anchor.removeAllChildren();
        }, 2000);
    }

    endGameWinning(){
        this.surprise.active = true;
    }
    start () {

    }

    // update (dt) {}
}
