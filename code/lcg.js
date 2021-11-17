

// LCG

var LCG = function(s_, m_, a_, c_, b_) {
	this.seed = s_ || new Date().getTime();
	
	//alert("typeof s_:"+typeof(s_)+"\ntypeof m_:"+typeof(m_)+"\ntypeof a_:"+typeof(a_)+"\ntypeof c_:"+typeof(c_)+"\ntypeof b_:"+typeof(b_))
		
	//  GCC's constants
	//this.m = 0x80000000; // 2**31;
	//this.a = 1103515245;
	//this.c = 12345;
	//this.returnbits = 0xffffffff;
	
	
	//  parameters
	this.m = m_ ;
	this.a = a_ ;
	this.c = c_ ;
	this.returnbits = b_;

	// Initial state
	this.state = this.seed;
};  

LCG.prototype.nextInt = function() {
	// Xn+1 = (a * Xn +c) mod m
	this.state = ((this.a * this.state) + this.c) % this.m;
	if (this.returnbits){
		return this.state & this.returnbits;
	} else {
		return this.state; // & this.returnbits;
	}
};

LCG.prototype.nextFloat = function() {
	// returns in range [0,1]
	return this.nextInt() / (this.m);
};



// BigInt LCG
// BigInt versie van de LCG routine
// Zie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
// Niet compatible met Edge, IE en Safari
// Wel beschikbaar op Chrome, Firefox en Opera.
// Alle interne waarden seed, state, m, a, en c als BigInt bewerken.
// Bij opleveren resultaat de waarde van state  terug converteren naar Number


var BigIntLCG = function(s_, m_, a_, c_, b_) {
	this.seed = BigInt(s_) || BigInt(new Date().getTime());
	
	//alert("typeof s_:"+typeof(s_)+"\ntypeof m_:"+typeof(m_)+"\ntypeof a_:"+typeof(a_)+"\ntypeof c_:"+typeof(c_)+"\ntypeof b_:"+typeof(b_))
		
	//  GCC's constants
	//this.m = 0x80000000; // 2**31;
	//this.a = 1103515245;
	//this.c = 12345;
	//this.returnbits = 0xffffffff;
	
	
	//  parameters
	this.m = BigInt(m_) ;
	this.a = BigInt(a_) ;
	this.c = BigInt(c_) ;
	this.returnbits = b_;

	// Initial state
	this.state = this.seed; // BigInt
};

BigIntLCG.prototype.nextInt = function() {
	// Xn+1 = (a * Xn +c) mod m
	this.state = ((this.a * this.state) + this.c) % this.m;
	if (this.returnbits){
		return Number(this.state) & this.returnbits;
	} else {
		return Number(this.state); // & this.returnbits;
	}
};

BigIntLCG.prototype.nextFloat = function() {
	// returns in range [0,1]
	return this.nextInt() / (Number(this.m));
};





// BigNumLCG
// Omdat BigInt niet werkt in Edge, IE en Safari
// hier een alternatief dat werkt met library Big.js
// Bron: https://github.com/MikeMcl/big.js
// Operators zijn:
// - vermenigvuldigen: Big.times()
// - optellen: Big.plus()
// - modulus: Big.mod()
// - conversie big naar Number: gaat niet direct, eerst naar string met Big.toString(), dat interpreteren met parseInt()
// ToDo: De getallen uit het formulier in de toekomst niet meer via parseInt naar Number converteren, maar de Parse door Big laten doen


var BigNumLCG = function(s_, m_, a_, c_, b_) {
	this.seed = Big(s_) || BigInt(new Date().getTime());
	
	//alert("typeof s_:"+typeof(s_)+"\ntypeof m_:"+typeof(m_)+"\ntypeof a_:"+typeof(a_)+"\ntypeof c_:"+typeof(c_)+"\ntypeof b_:"+typeof(b_))
		
	//  GCC's constants
	//this.m = 0x80000000; // 2**31;
	//this.a = 1103515245;
	//this.c = 12345;
	//this.returnbits = 0xffffffff;
	
	
	//  parameters
	this.m = Big(m_) ;
	this.a = Big(a_) ;
	this.c = Big(c_) ;
	this.returnbits = b_;

	// Initial state
	this.state = this.seed; // Seed is al een Big
};  

BigNumLCG.prototype.nextInt = function() {
	// Xn+1 = (a * Xn +c) mod m
	this.state = ((this.a.times(this.state)).plus(this.c)).mod(this.m);
	if (this.returnbits){
		return parseInt(this.state.toString()) & this.returnbits;
	} else {
		return parseInt(this.state.toString()); // & this.returnbits;
	}
};

BigNumLCG.prototype.nextFloat = function() {
	// returns in range [0,1]
	return ( this.nextInt() / ( parseInt(this.m.toString()) ) );
};


