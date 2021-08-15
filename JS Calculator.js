class Calculator {
				constructor(prev, curr){
								this.prev = prev;
								this.curr = curr;
								this.ac();
				}
				
				ac() {
								this.previn = '';
								this.currin = '';
								this.op = undefined;
				}
				
			 del() {
								this.currin = this.currin.toString().slice(0, -1);
				}
				
			 apnum(number) {
			 				if (number == "." && this.currin.includes(".")) return;
								this.currin = this.currin.toString() + number.toString();
				}
				
			 chooseop(op) {
			 				if (this.currin == '') return;
			 				if (this.previn != '') {
			 								this.comput();
			 				}
								this.op = op;
								this.previn = this.currin;
								this.currin = '';
				}
				
			 comput() {
								let comp;
								const pre = parseFloat(this.previn);
								const crr = parseFloat(this.currin);
								if (isNaN(pre) || isNaN(crr)) return;
								
								switch (this.op) {
												case "+":
																comp = pre + crr;
																break;
																
												case "-":
																comp = pre - crr;
																break;
																
												case "÷":
																comp = pre / crr;
																break;
																
												case "×":
																comp = pre * crr;
																break;
																
												default:
																return;
								}
								
								this.previn = '';
								this.currin = comp;
								this.op = undefined;
				}
				
				disNum(number){
								const sn = number.toString();
								const inum = parseFloat(sn.split(".")[0]);
								const dnum = sn.split(".")[1];
								let ind;
								if (isNaN(inum)) {
												ind = "";
								}else {
												ind = inum.toLocaleString("en", {maximumFractionDigits: 0});
								}
								
								if (dnum != null) {
												return ind +"."+ dnum;
								}else {
												return ind;
								}
				}
				
			 update() {
								this.curr.innerText = this.disNum(this.currin);
								
								if (this.op != null) {
												this.prev.innerText = this.disNum(this.previn) + this.op;
								}
								else {
												this.prev.innerText = "";
								}
				}
}

const numB = document.querySelectorAll("[data-num]");
const opB = document.querySelectorAll("[data-op]");
const eqB = document.querySelector("[data-eq]");
const prev = document.querySelector("[data-prev-op]");
const curr = document.querySelector("[data-curr-op]");
const acB = document.querySelector("[data-ac]");
const delB = document.querySelector("[data-del]");

const calculator = new Calculator(prev, curr);

numB.forEach(button => {
				button.addEventListener("click", () => {
								calculator.apnum(button.innerText);
								calculator.update();
				})
})

opB.forEach(button => {
				button.addEventListener("click", () => {
								calculator.chooseop(button.innerText);
								calculator.update();
				})
})

eqB.addEventListener("click", button => {
				calculator.comput();
				calculator.update();
})

acB.addEventListener("click", button => {
				calculator.ac();
				calculator.update();
})

delB.addEventListener("click", button => {
				calculator.del();
				calculator.update();
})

