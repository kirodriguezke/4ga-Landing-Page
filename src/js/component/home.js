import React from "react";

//create your first component
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./cards.js";
import { Footer } from "./footer.js";

export function Home(props) {
	return (
		<div className="container">
			<Navbar />

			<Jumbotron title=" Daniela and Enrique's History" urlJumbutton="" />

			<div className="contenedor container d-flex">
				<Card
					urlImg="https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/124969822_3409523965826966_569822964023677039_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=m2dwMh9pY-oAX9EKM7C&_nc_ht=scontent-mad1-1.xx&oh=992d3e830144b4828424f630dd525152&oe=5FD13F1D"
					title="Fine afternoon of September"
					textCard="We met at a small chilean celebration in 2017. I set my eyes on her and I  knew that I wanted to meet her."
					buttonCard=""
				/>
				<Card
					urlImg="https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/124760395_3409550825824280_2679364625507214183_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=fitlvAY9r40AX9Gm26G&_nc_ht=scontent-mad1-1.xx&oh=4c89283442d7bb804733722dc0c26993&oe=5FD13056"
					title="Wonderful park rides"
					textCard="One thing in common we two have is the love to go on hikes."
					buttonCard=""
				/>
				<Card
					urlImg="https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/124844907_3409569835822379_9121918034525976208_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=It-Sc2ajvSgAX_iLaoG&_nc_ht=scontent-mad1-1.xx&oh=c8675f22f7b2842badf9778cbff6d2cc&oe=5FD2FA28"
					title="We love visiting new places"
					textCard="We have been in many different places together, we love knowing new places."
					buttonCard=""
				/>
				<Card
					urlImg="https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/124778330_3409592809153415_6793276009062769448_o.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_ohc=HylbaeThWF0AX8vRleP&_nc_ht=scontent-mad1-1.xx&oh=f60a40d9909094ec52b530f1f4d8f3ff&oe=5FD392AA"
					title="Dress up Time"
					textCard="We also love dressing up for fancy events ;)."
					buttonCard=""
				/>
			</div>

			<Footer />
		</div>
	);
}
