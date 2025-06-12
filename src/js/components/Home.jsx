import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({numero1, numero2, numero3, numero4}) => {
	return (
		<div className="container">
            <div className="calendar">
			<i class="bi bi-stopwatch"></i>
            </div>
            <div className="digitoCuatro">{numero4}</div>
            <div className="digitoTres">{numero3}</div>
            <div className="digitoDos">{numero2}</div>
            <div className="digitoUno">{numero1}</div>
        </div>
	);
};

export default Home;