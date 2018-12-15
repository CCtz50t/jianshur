import { fromJS } from 'immutable';
import * as constants from './constants';
import logoPic1 from '../../../statics/pic1.png';
import logoPic2 from '../../../statics/pic2.png';
import logoPic3 from '../../../statics/pic3.png';
import logoPic4 from '../../../statics/pic4.png';
import logoPic5 from '../../../statics/pic5.png';
import homepic1 from '../../../statics/home1.jpg';
import homepic2 from '../../../statics/home2.jpg';
import homepic3 from '../../../statics/home3.jpg';

const defaultState = fromJS({
	topicList: [],
	articleList: [],
	recommendList: [{
		id: 1,
		imgUrl: logoPic1
	},{
		id: 2,
		imgUrl: logoPic2
	},{
		id: 3,
		imgUrl: logoPic3
	},{
		id: 4,
		imgUrl: logoPic4
	},{
		id: 5,
		imgUrl: logoPic5
	}],
	writerList:[],
	articlePage: 1,
	lunboList: [{
		id: 1,
		imgUrl: homepic1
	},{
		id: 2,
		imgUrl: homepic2
	},{
		id: 3,
		imgUrl: homepic3
	}]
});

export default (state=defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_HOME_DATA:
			return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				writerList: fromJS(action.writerList),
			})
		case constants.ADD_ARTICLE_LIST:
			return state.merge({
				'articleList': state.get('articleList').concat(action.list),
				'articlePage': action.nextPage
			})
		default:
			return state;
	}
}