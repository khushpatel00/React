export default function Button({ content, classList, ref, output }) {
	let query = '';
	const handleAction = (e, ref, output) => {
		let last = ref.current.innerHTML.split('').pop();
		if(ref.current.innerHTML == 0) ref.current.innerHTML = '';
		// console.log(last) 
		if(e == '=' || e == 'CE' || e == 'c'){
			if(e == 'CE') output(0)
			else if (e == '=') output(calculateFinalResult(ref.current.innerHTML));
			else if (e == 'c') output(ref.current.innerHTML.split('').slice(0, -1).join(''))
			return;
		}
		if(last != '*' && last !='/' && last != '+' && last != '-'){ // lastinput is number
    		query = ref.current.innerHTML + e;
			output(query);
		}else{ // last input is symbol
			if(e != '*' && e !='/' && e != '+' && e != '-') { //currentinput is number
	    		query = ref.current.innerHTML + e;
				output(query);
	    	}
	    	else{ // currentinput is symbol

	    		let temp = ref.current.innerHTML.split('').slice(0, -1).join('') + e;
	    		// console.log(temp)
	    		output(temp)
	    	}
		}
  	}

  	function calculateFinalResult(q){

  		let ans = eval(q);
  		// console.log(ans)
  		return ans; 
  	}



	return (
		<button onClick={()=>handleAction(content, ref, output)} className={' p-1 cursor-pointer rounded-lg ' + classList}>
			<p className="border border-zinc-500 px-9 py-5 rounded-xl">{content}</p>
		</button>
	)
}