import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
//import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import Lunbo from './components/Lunbo';
import { actionCreators } from './store';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';

class Home extends PureComponent {
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<Lunbo />
					{/* <Topic />  不显示 */}
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
			</HomeWrapper>
		)
	}
	componentDidMount() {
		this.props.changeHomeData();
	}
}

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	}
});

export default connect(null,mapDispatch)(Home);