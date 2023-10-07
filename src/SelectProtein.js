import { useState, useEffect } from "react"
import styled from "styled-components"
import fasta from "biojs-io-fasta"
import defaultRawFasta from "./default-proteins"
import { toast } from "react-toastify"
import { isOnlyGene, dnaToAcid } from "./utils"


const defaultSeqList = fasta.parse(defaultRawFasta)
const SelectProtein = ({ onChange = () => null }) => {
	const [proteinName, setProteinName] = useState(defaultSeqList[0].name)

	const handleProteinChange = e => {
		setProteinName(e.target.value)
		onChange(defaultSeqList.find(({ name }) => name == e.target.value))
	}
	const handleFile = async e => {
		const rawFasta = await e.target.files[0].text()

		try {
			console.log("file is selected")
			const seqObj = fasta.parse(rawFasta)[0]

			if(isOnlyGene(seqObj.seq)) {
				console.log("gene is selected")
				seqObj.seq = dnaToAcid(seqObj.seq)
				console.log(seqObj.seq)
			}
			onChange(seqObj)
		} catch(e) {
			console.error(e)
			toast.error("Invalid or corrupt fasta file", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			})
		}
	}

	useEffect(() => {
		onChange(defaultSeqList[0])
	}, [])

	return (
		<Container>
			<Section>
				<Text>Choose from sample proteins</Text>
				<Select value={proteinName} onChange={handleProteinChange}>
					{defaultSeqList.map(({ name }) => (
						<option value={name} key={name}>{name}</option>
					))}
				</Select>
			</Section>
			<Section>
				<Text>Upload your own sequence</Text>
				<File type="file" accept=".fasta,.fna,.ffn,.faa,.frn,.fa" onChange={handleFile} />
			</Section>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	@media screen and (max-width: 44em) {
		flex-direction: column;
		gap: 2rem;
	}
`
const Text = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
`
const Section = styled.div`
	display: flex;
	gap: 1rem;
	flex-direction: column;
	width: 45%;
	
	@media screen and (max-width: 44em) {
		width: 100%;
	}
`
const Select = styled.select`
	// background: #088395;
	color: #242424;
	background: #fefefe;
	font-weight: bold;
	font-size: 1.1rem;
	border: 3px solid #088395;
	border-radius: 4px;
	padding: 1rem;
	width: max-content;

`

const File = styled(Select).attrs({ as: "input" })``

export default SelectProtein
