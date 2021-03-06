import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './CommentApp';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class Main extends Component{
	constructor(){
		super()
		this.state = {
			isShowClock: true
		}
	}
	handleShowOrHide(){
		this.setState({
			isShowClock: !this.state.isShowClock
		})
	}
	render(){
		return(
			<div>
				<CommentApp />
			</div>
		)
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
