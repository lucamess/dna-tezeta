import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import PlaySeqs from "./PlaySeqs"
import SelectProtein from "./SelectProtein"
import GraphSeqs from "./GraphSeqs"
import { ToastContainer } from 'react-toastify';
import { generateTimes, Space } from "./utils"

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
		border: 0;
		outline: 0;
		// background: #f0f0ff;
	}

	* {
		box-sizing: border-box;
		font-family: 'Inter', sans-serif;
	}
`

const App = () => {
	const [protein, setProtein] = useState({ name: "", seq: "" })
	const times = generateTimes(protein.seq)

	return (
		<>
			<HeaderCont>
				<Header>dna2ambasel</Header>
			</HeaderCont>
			<Space h="1rem" />
			<Container>
				<GlobalStyle />
				<ToastContainer />
				<div style={{ fontSize: "1.8rem",  }}>Short introduction</div>
				<p>IIve been playing with bioinformatics algorithms and DNA for a while during the COVID-19 lockdown. While reading a book chapter about machine translation, a weird idea came to my mind. I wondand music. It took me a few hours and a couple hundred lines of OCaml code to make a small program that translates FASTA files to playable MIDI files, mapped to an arbitrary music scale.</p>
				<Space h="1rem" />

				<SelectProtein onChange={setProtein} />
				<Space h="2rem" />

				<Divider />
				<Space h="3rem" />
				<Group>
					<div style={{ fontSize: "1.5rem", textAlign: "center" }}>Protein name: {protein.name}</div>
					<Space h="1rem" />
					<PlaySeqs seq={protein.seq} times={times} />
					<Space h="2rem" />
					<GraphSeqs seq={protein.seq} times={times} />
				</Group>
				<Space h="3rem" />
			</Container>
		</>
	)
}

const Divider = styled.div`
	border: 2px solid #053B50;
`
const Group = styled.div`
	background:	#e6f2f4;
	border-radius: 8px;
	padding: 2rem;
	box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
`
const HeaderCont = styled.div`
	display: flex;
	align-items: center;
	background: #053B50;
	height: 5rem;
	padding: 0 2rem;
`
const Header = styled.div`
	width: 100%;
	max-width: 1200px;
	margin: 2rem auto;
	font-size: 1.5rem;
	font-weight: bold;
	color: #eee;
`
const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 700px;
	margin: 0 auto;
	padding: 0 2rem;
`

export default App
