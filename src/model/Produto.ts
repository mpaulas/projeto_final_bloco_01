export class Produto{

    private _id: number;
    private _nome: string;
    private _peca: number;
    private _preco: number;
	

	constructor(id: number, nome: string, peca: number, preco: number) {
		this._id = id;
		this._nome = nome;
		this._peca = peca;
		this._preco = preco;
		
	}

    
	public get id(): number {
		return this._id;
	}

   
	public get nome(): string {
		return this._nome;
	}

   
	public get peca(): number {
		return this._peca;
	}

    
	public get preco(): number {
		return this._preco;
	}


    
	public set id(value: number) {
		this._id = value;
	}

    
	public set nome(value: string) {
		this._nome = value;
	}

   
	public set peca(value: number) {
		this._peca = value;
	}

    
	public set preco(value: number) {
		this._preco = value;
	}

   
	


	
    public visualizar(): void{

		
         console.log("\n*******************************************")
         console.log("Dados do Produto")
         console.log("*******************************************")
         console.log(`Id: ${this._id}`)
         console.log(`Nome: ${this._nome}`)
         console.log(`Peças: ${this._peca}`)
         console.log(`Preço: ${this._preco}`)
     }
 }