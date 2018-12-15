import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LunboBox } from '../style';

class Lunbo extends PureComponent {
	render() {
		const { list } =this.props;
		return (
			<LunboBox>
				<div className='lunbotu'>
					<div className='list-img'>
					{
						list.map((item) =>{
							return (
								<img key={item.get('id')} className="banner-img" 
									src={item.get('imgUrl')} alt="" 
								/>
							);
						})
					}
					</div>
					<div className='buttons'>
						<span index='1' className='on'></span>
						<span index='2'></span>
						<span index='3'></span>
					</div>
					<div id="prev" className="arrow">&lt;</div>
					<div id="next" className="arrow">&gt;</div>
				</div>
			</LunboBox>
		)
	}
}


const mapState = (state) => ({
	list: state.getIn(['home','lunboList']),
});
const mapDispatch = (dispatch) => {
	return {
	
	}
};

export default connect(mapState,mapDispatch)(Lunbo);