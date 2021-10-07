import Block from './block';

//Contructur para inicializar/agregar el bloque Genesis
class Blockchain {

    constructor(){
        this.blocks = [Block.genesis];
    }

    addBlock(data){
        const previousBlock = this.blocks[this.blocks.length -1];
        const block = Block.mine(previousBlock, data);

        this.blocks.push(block);

        return block;
    }
}

export default Blockchain;