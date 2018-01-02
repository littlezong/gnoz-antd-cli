import React from 'react';
import {
	HashRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
// import Bundle from './components/Bundle';
import Portal from './views/Portal';
import Guide from './views/Guide';
import PageNoFound from './views/pageNoFound';

// import './style/main.less';

// const onDemandLoad = (comm) => (
// 	(props) => <Bundle load={() => comm}>{(comp) => <comp />}</Bundle>
// );

export default class Root extends React.Component{
	render(){
		return (
			<Router>
				<Portal>
					<Switch>
						<Route exact={true} path="/" component={Guide} />
						<Route component={PageNoFound}/>
					</Switch>
				</Portal>
			</Router>
		)
	}
};