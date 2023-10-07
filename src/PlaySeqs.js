import "react-video-seek-slider/styles.css"
import { useState, useEffect } from "react"
import Crunker from "crunker"
import styled from "styled-components"
import { VideoSeekSlider } from "react-video-seek-slider"
import { msToReadable, Space, sleep, getTotalTime } from "./utils"
import { acidToNote } from "./config"
import { PlayIcon, PauseIcon } from "./icons"

let noteToBuffer = {}
let crunker = new Crunker();
let playing = false
let index = 0
let currNote = "1"


const loadBuffers = () => {
	return crunker.fetchAudio("/c3.mp3", "/db3.mp3", "/f3.mp3", "/g3.mp3", "/ab3.mp3")
		.then(buffers => {
			noteToBuffer = {1: buffers[0], 2: buffers[1], 3: buffers[2],
				4: buffers[3], 5: buffers[4], }
		})
		.then(() => console.log("done"))
		.then(sleep(3000))
}

const playMusic = async (seq, times) => {
	playing = true

	for(; index < seq.length && playing; index++) {
		const acid = seq[index]
		currNote = acidToNote[acid]
		crunker.play(noteToBuffer[currNote])
		
		console.log("index", index, seq.length)

		await sleep(times[index])()
	}
	playing = false
}

const pauseMusic = () => {
	playing = false
}

const PlaySeqs = ({ seq, times }) => {
	const totalTime = getTotalTime(times)
	const [currSec, setCurrSec] = useState(0)
	const [syncPlaying, setSyncPlaying] = useState(playing)
	const [loading, setLoading] = useState(true)

	const onMusicToggle = () => {
		if(index == seq.length) {
			index = 0
			setCurrSec(0)
		}

		if(playing) {
			setSyncPlaying(false)
			pauseMusic()
		} else {
			setSyncPlaying(true)
			playMusic(seq, times)
		}
	}
	const onSeek = newSec => {
		setCurrSec(newSec)
		index = Math.floor((newSec/totalTime)*seq.length)
	}

	useEffect(() => {
		loadBuffers()
			.then(() => setLoading(false))

		const seekTimer = setInterval(() => {
			if(playing)
				setCurrSec(sec => sec + 100)
		}, 100)


		return () => {
			clearInterval(seekTimer)
		}

	}, [])

	useEffect(() => {
		setCurrSec(0)
		index = 0
		playing = false
		setSyncPlaying(false)
	}, [seq])

	return (
		<Container>
			<Border>
				<VideoSeekSlider
					max={totalTime}
					currentTime={currSec}
					bufferTime={currSec}
					onChange={onSeek}
					secondsPrefix="00:00:"
					minutesPrefix="00:"
				/>
				<Space h="1rem" />
			</Border>

			<Space h="2rem" />

			{loading ? <Loading>Loading...</Loading> :
			<Controls>
				<Time>{msToReadable(currSec) + " / " + msToReadable(totalTime)}</Time>
				<ControlButton onClick={onMusicToggle}>
					{syncPlaying ? <PauseIcon size="2.5rem" /> : <PlayIcon size="2.5rem" />}
				</ControlButton>
				<Time style={{ opacity: 0 }}>{msToReadable(currSec) + "/" + msToReadable(totalTime)}</Time>
			</Controls>
			}

		</Container>
	)
}

const Time = styled.div`
	font-size: 1rem;
	color: #eee;
`
const Controls = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`
const Loading = styled.div`
	color: #eee;
	font-size: 1.1rem;
	font-weight: bold;
	text-align: center;
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: 90%;
	background: #242424;
	padding: 2rem 2rem 1rem 2rem;
	border-radius: 8px;
`
const Border = styled.div`

`
const ControlButton = styled.div`
	cursor: pointer;
	width: max-content;
	align-self: center;
	margin: 0 auto;
`

export default PlaySeqs
