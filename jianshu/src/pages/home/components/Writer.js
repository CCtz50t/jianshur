import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper,WriterItem,WriterInfo } from '../style';

class Writer extends PureComponent {
	render() {
		return (
			<WriterWrapper>
				推荐作者
				<a className='change' href='/'>换一批</a>
				{
					this.props.list.map((item) => {
						return (
							<WriterItem key={item.get('id')}>
								<img src={item.get('imgUrl')} alt='' />
								<WriterInfo>
									<h5 className='autor'>{item.get('autors')}</h5>
									<p className='words'>{item.get('words')}</p>
								</WriterInfo>
							</WriterItem>
						)
					})
				}
			</WriterWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home','writerList'])
})

export default connect(mapState,null)(Writer);