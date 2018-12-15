import React, { PureComponent } from 'react';
import { ListItem,ListInfo,LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom'; //代替a标签

class List extends PureComponent {
	render() {
		const { list,getMoreList,page } = this.props;
		return (
			<div>
				{
					list.map((item,index) => {
						return (
							<Link key={index} to='/detail'>
								<ListItem>
									<img className="pic" src={item.get('imgUrl')} alt=""/>
									<ListInfo>
										<h3 className="title">{item.get('title')}</h3>
										<p className="describe">{item.get('describe')}</p>
									</ListInfo>
								</ListItem>
							</Link>
						);
					})
				}
				<LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
		</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home','articleList']),
	page: state.getIn(['home','articlePage'])
});

const mapDispatch = (dispatch) => ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page))
	}
})

export default connect(mapState,mapDispatch)(List);