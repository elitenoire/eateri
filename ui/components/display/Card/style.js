import styled from 'styled-components'

export const Base = styled.div`
	position: relative;
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	/* align-items: center; */
	justify-content: space-between;
	background-image: linear-gradient(
			22.5deg,
			rgba(67, 67, 67, 0.02) 0%,
			rgba(67, 67, 67, 0.02) 29%,
			rgba(47, 47, 47, 0.02) 29%,
			rgba(47, 47, 47, 0.02) 37%,
			rgba(23, 23, 23, 0.02) 37%,
			rgba(23, 23, 23, 0.02) 55%,
			rgba(182, 182, 182, 0.02) 55%,
			rgba(182, 182, 182, 0.02) 69%,
			rgba(27, 27, 27, 0.02) 69%,
			rgba(27, 27, 27, 0.02) 71%,
			rgba(250, 250, 250, 0.02) 71%,
			rgba(250, 250, 250, 0.02) 100%
		),
		linear-gradient(
			67.5deg,
			rgba(117, 117, 117, 0.02) 0%,
			rgba(117, 117, 117, 0.02) 14%,
			rgba(199, 199, 199, 0.02) 14%,
			rgba(199, 199, 199, 0.02) 40%,
			rgba(33, 33, 33, 0.02) 40%,
			rgba(33, 33, 33, 0.02) 48%,
			rgba(135, 135, 135, 0.02) 48%,
			rgba(135, 135, 135, 0.02) 60%,
			rgba(148, 148, 148, 0.02) 60%,
			rgba(148, 148, 148, 0.02) 95%,
			rgba(53, 53, 53, 0.02) 95%,
			rgba(53, 53, 53, 0.02) 100%
		),
		linear-gradient(
			135deg,
			rgba(190, 190, 190, 0.02) 0%,
			rgba(190, 190, 190, 0.02) 6%,
			rgba(251, 251, 251, 0.02) 6%,
			rgba(251, 251, 251, 0.02) 18%,
			rgba(2, 2, 2, 0.02) 18%,
			rgba(2, 2, 2, 0.02) 27%,
			rgba(253, 253, 253, 0.02) 27%,
			rgba(253, 253, 253, 0.02) 49%,
			rgba(128, 128, 128, 0.02) 49%,
			rgba(128, 128, 128, 0.02) 76%,
			rgba(150, 150, 150, 0.02) 76%,
			rgba(150, 150, 150, 0.02) 100%
		),
		linear-gradient(90deg, #ffc078 50%, #ff922b);
	background-image: linear-gradient(
			135deg,
			rgba(186, 186, 186, 0.03) 0%,
			rgba(186, 186, 186, 0.03) 10%,
			rgba(133, 133, 133, 0.03) 10%,
			rgba(133, 133, 133, 0.03) 14%,
			rgba(38, 38, 38, 0.03) 14%,
			rgba(38, 38, 38, 0.03) 17%,
			rgba(93, 93, 93, 0.03) 17%,
			rgba(93, 93, 93, 0.03) 25%,
			rgba(80, 80, 80, 0.03) 25%,
			rgba(80, 80, 80, 0.03) 45%,
			rgba(239, 239, 239, 0.03) 45%,
			rgba(239, 239, 239, 0.03) 100%
		),
		linear-gradient(
			135deg,
			rgba(236, 236, 236, 0.03) 0%,
			rgba(236, 236, 236, 0.03) 47%,
			rgba(182, 182, 182, 0.03) 47%,
			rgba(182, 182, 182, 0.03) 63%,
			rgba(223, 223, 223, 0.03) 63%,
			rgba(223, 223, 223, 0.03) 81%,
			rgba(86, 86, 86, 0.03) 81%,
			rgba(86, 86, 86, 0.03) 89%,
			rgba(23, 23, 23, 0.03) 89%,
			rgba(23, 23, 23, 0.03) 90%,
			rgba(226, 226, 226, 0.03) 90%,
			rgba(226, 226, 226, 0.03) 100%
		),
		linear-gradient(
			45deg,
			rgba(52, 52, 52, 0.03) 0%,
			rgba(52, 52, 52, 0.03) 31%,
			rgba(246, 246, 246, 0.03) 31%,
			rgba(246, 246, 246, 0.03) 63%,
			rgba(188, 188, 188, 0.03) 63%,
			rgba(188, 188, 188, 0.03) 71%,
			rgba(15, 15, 15, 0.03) 71%,
			rgba(15, 15, 15, 0.03) 87%,
			rgba(127, 127, 127, 0.03) 87%,
			rgba(127, 127, 127, 0.03) 93%,
			rgba(234, 234, 234, 0.03) 93%,
			rgba(234, 234, 234, 0.03) 100%
		),
		linear-gradient(180deg, #ffe066, #ffd43b);
	border-radius: 20px;
	box-shadow: rgba(0, 0, 0, 0.08) 0 3px 8px 0;
	box-shadow: rgba(255, 212, 59, 0.8) 0 20px 40px -12px;
	/* padding: 5%; */
	max-width: 220px;
	/* min-height: 400px; */
`

export const Image = styled.div`
	position: relative;
	width: 90%;
	top: 25px;
	left: -35%;
	:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		left: 3%;
		/* top: 0; */
		border-radius: 50%;
		transform: scale(0.8);
		box-shadow: 0 20px 40px 2px rgba(0, 0, 0, 0.4);
		/* background: red; */
		/* opacity: 0.8; */
		/* z-index: 1; */
	}
	img {
		width: 100%;
		height: auto;
	}
`

export const Content = styled.div`
	padding: 8px;
	margin: 40px 20px;
	/* margin-top: 0px; */
	border-radius: 8px;
	background: rgba(0, 0, 0, 0.03);
	background: rgba(255, 255, 255, 0.1);
	font-weight: 800;
	color: #fff9db;
`
