import Block from './block';

describe('Block', () =>{
    let timestamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(() =>{
        timestamp = new Date(2010,0,1);
        previousBlock = Block.genesis;
        data = 'transct0';
        hash = 'hash0';
    });

    it('Crear instancia con parametros', ()=>{
        const block = new Block(timestamp, previousBlock.hash,hash,data);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);
    });

    it('usando static mine', ()=>{
        const block = Block.mine(previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(data).toEqual(data);
    });

    it('usando static hash',()=>{
        hash = Block.hash(timestamp, previousBlock.hash, data);
        const hasOutput = "72f5c525789ea54542785a70eca29d051979955e0905d7d5b36393d30d94a808";

        expect(hash).toEqual(hasOutput);

    });

    it('usando to string',() =>{
        const block = Block.mine(previousBlock, data);

        expect(typeof block.toString()).toEqual('string');
    });
});