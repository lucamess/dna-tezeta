import styled from "styled-components"

export const Space = styled.div`
	height: ${prop => prop.h || 0};
	width: ${prop => prop.w || 0};

	@media screen and (max-width: 64em) {
		height: ${prop => prop.mh || prop.h || 0};
		width: ${prop => prop.mw || prop.w || 0}
	}
`

export const sleep = (ms) => (value) => {
	return new Promise((res) => {
		setTimeout(() => res(value), ms)
	})
}

export const cyrb53 = (str, seed = 0) => {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

export const getTotalTime = times => 
	times.reduce((prev, curr) => prev + curr, 0)

export const generateTimes = seqStr => {
	let times = []
	let i = 0
	while(times.length < seqStr.length) {
		const rando = cyrb53(seqStr, i)
		if((rando % 10) <= 5) {
			times = [
				...times,
				...Array(rando % 8 + 3).fill(rando % 100 + 50)
			]
		} else {
			times = [
				...times,
				...Array(rando % 3 + 2).fill(rando % 300 + 300)
			]
		}
		i++
	}

	return times.slice(0, seqStr.length)
}

const codonDictionary = { 
	"A": ["GCA","GCC","GCG","GCT"], 
	"C": ["TGC","TGT"], 
	"D": ["GAC", "GAT"],
	"E": ["GAA","GAG"],
	"F": ["TTC","TTT"],
	"G": ["GGA","GGC","GGG","GGT"],
	"H": ["CAC","CAT"],
	"I": ["ATA","ATC","ATT"],
	"K": ["AAA","AAG"],
	"L": ["CTA","CTC","CTG","CTT","TTA","TTG"],
	"M": ["ATG"],
	"N": ["AAC","AAT"],
	"P": ["CCA","CCC","CCG","CCT"],
	"Q": ["CAA","CAG"],
	"R": ["AGA","AGG","CGA","CGC","CGG","CGT"],
	"S": ["AGC","AGT","TCA","TCC","TCG","TCT"],
	"T": ["ACA","ACC","ACG","ACT"],
	"V": ["GTA","GTC","GTG","GTT"],
	"W": ["TGG"],
	"Y": ["TAC","TAT"],
};

export const isOnlyGene = seq => {
	for(let i=0; i<seq.length; i++) {
		if(seq[i] != "A" && seq[i] != "T" && seq[i] != "C" && seq[i] != "G" && seq[i] != "N")
			return false
	}

	return true
}

export const dnaToAcid = seq => {
	let res = ""
	seq.match(/.{1,3}/g).forEach(s => {
		var key = Object.keys(codonDictionary)
			.filter(x => codonDictionary[x].filter(y => y === s).length > 0)[0]
		res += key != undefined ? key : ''
	})

	return res
}

export const msToReadable = ms => {
	let seconds = Math.floor((ms/1000) % 60)
	let minutes = Math.floor((ms/(1000*60)) % 60)

	seconds = String(seconds).length == 1 ? 0 + String(seconds) : seconds
	minutes = String(minutes).length == 1 ? 0 + String(minutes) : minutes

	return minutes + ":" + seconds
}


