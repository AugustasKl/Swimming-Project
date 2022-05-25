import React from "react";
import { Header } from "components";
import { QuizSection } from "./sections";
import { useQuery } from "styles/theme";


const Quiz: React.FC = () => {
const {isDesktop}=useQuery()
	return(
	<>
	{!isDesktop && <Header/>}
    <QuizSection/>
	</>
)
}

export default Quiz;
