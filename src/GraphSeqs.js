import styled from "styled-components"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Scatter, ScatterChart } from "recharts"
import { acidToNote } from "./config"
import { Space } from "./utils"

const getBarData = seq => {
	const noteCounts = {
		1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
	}
	const noteToFunction = {
		1: "C", 2: "Db", 3: "F", 4: "G", 5: "Ab"
	}

	seq.split("").forEach(acid => {
		noteCounts[acidToNote[acid]] += 1
	})

	return Object.keys(noteToFunction).map(note => ({
		name: noteToFunction[note],
		fq: noteCounts[note],
	}))
}

const getScatterData = times => {
	const data = times.map((time, index) => ({ x: index, y: time }))
	return data
}


const GraphSeqs = ({ seq, times }) => {
	return (
		<Container>
			<Graph>
				<Title>Intervals distribution</Title>
				<Space h="1rem" />
				<ScatterChart
					width={500}
					height={300}
					margin={{
						top: 20,
						right: 20,
						bottom: 20,
						left: 20,
					}}
				>
					<CartesianGrid />
					<XAxis type="number" dataKey="x" name="index" unit="" />
					<YAxis type="number" dataKey="y" name="milliseconds" unit="ms" />
					<Tooltip cursor={{ strokeDasharray: '3 3' }} />
					<Scatter name="A school" data={getScatterData(times)} fill="#FF97C1" />
				</ScatterChart>
			</Graph>
			<Graph>
				<Title>Histogram of notes</Title>
				<Space h="1rem" />
				<BarChart
					width={500}
					height={300}
					data={getBarData(seq)}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis padding={{ top: 50 }} />
					<Tooltip />
					<Bar dataKey="fq" fill="#186F65 " />
				</BarChart>
			</Graph>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
`
const Graph = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const Title = styled.div`
	font-size: 1.3rem;
	font-weight: bold;
	text-align: center;
`

export default GraphSeqs
