import { useEffect } from "react"
import Crunker from "crunker"

let noteToBuffer = {}
let chordToBuffer = {}
// const acidToNote = {
// 	A: "e3", C: "f3", E: "a4", F: "b4", G: "c4", H: "e4", I: "f4", K: "a5", L: "b5",
// 	M: "e3", N: "f3", P: "a4", Q: "b4", R: "c4", S: "e4", T: "f4", V: "a5", W: "b5", Y: "a4"
// }





const loadBuffers = () => {
	crunker.fetchAudio("/a4.mp3", "/b4.mp3", "/c4.mp3", "/e4.mp3", "/f4.mp3",
		"/am-chord.wav", "/bm-chord.wav", "/c-chord.wav", "/em-chord.wav", "/f-chord.wav")
		.then(buffers => {
			noteToBuffer = {a4: buffers[0], b4: buffers[1], c4: buffers[2],
				e4: buffers[3], f4: buffers[4], }
			chordToBuffer = { a4: buffers[5], b4: buffers[6], c4: buffers[7],
				e4: buffers[8], f4: buffers[9], }
		})
		.then(() => console.log("done"))
}




const App = () => {
	useEffect(() => {
		loadBuffers()
	})
	const play = async () => {
		const seq = `EESVQETLAAAVPKIMASFGNFANDNEIKVLLKAFIANLKSSSPTIRRTAAGSAVSICQVFIGFVLKQFEYIEVGQFRESEAIIPNIFFFLVLLSYERYHSKQIIGIAI`
		const times = generateTimes(seq)
		console.log("length of seq", seq.length)

		playNotes(seq, times)
	}

	return (
		<div>
			hellow
			<button onClick={play}>Hello</button>
			<button onClick={() => { playing = false }}>Pause</button>
		</div>
	)
}


// crunker.mergeAudio([noteToBuffer.a4, noteToBuffer.e4]),
// crunker.mergeAudio([noteToBuffer.b4, noteToBuffer.d4]),
// crunker.mergeAudio([noteToBuffer.c4, noteToBuffer.g4]),
// crunker.mergeAudio([noteToBuffer.e4, noteToBuffer.b4]),
// crunker.mergeAudio([noteToBuffer.f4, noteToBuffer.c4])
//
// crunker.mergeAudio([noteToBuffer.a4, noteToBuffer.c4,]),
// crunker.mergeAudio([noteToBuffer.b4, noteToBuffer.d4]),
// crunker.mergeAudio([noteToBuffer.c4, noteToBuffer.e4,]),
// crunker.mergeAudio([noteToBuffer.e4, noteToBuffer.g4,]),
// crunker.mergeAudio([noteToBuffer.f4, noteToBuffer.a4,])
//
// crunker.mergeAudio([noteToBuffer.a4, noteToBuffer.c4, noteToBuffer.e4]),
// crunker.mergeAudio([noteToBuffer.b4, noteToBuffer.d4]),
// crunker.mergeAudio([noteToBuffer.c4, noteToBuffer.e4, noteToBuffer.g4]),
// crunker.mergeAudio([noteToBuffer.e4, noteToBuffer.g4, noteToBuffer.b4]),
// crunker.mergeAudio([noteToBuffer.f4, noteToBuffer.a4, noteToBuffer.c4])

export default App

