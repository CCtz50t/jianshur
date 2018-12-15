//现网站没有此组件，添加了轮播图
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper,TopicItem } from '../style';

class Topic extends PureComponent {
	render() {
		return (
			<TopicWrapper>
				{
					this.props.list.map((item) => {
						return (
							<TopicItem key={item.get('id')}>
								<img  className="topic-pic"
									src={item.get('imgUrl')} alt={item.get('id')}
								/>
								{item.get('title')}
							</TopicItem>
						)
					})
				}
			</TopicWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home','topicList'])
})

export default connect(mapState,null)(Topic);