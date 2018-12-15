import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button,
} from './style';

class Header extends Component {

	getListArea() {
		const { list,focused,page,totalPage,mouseIn,headleMouseEnter,headleMouseleave,handleChangePage } = this.props;
		const newList = list.toJS();
		const pageList = [];
		if (newList.length) {
			for (let i=(page-1)*10; i<page*10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo 
					onMouseEnter={headleMouseEnter}
					onMouseLeave={headleMouseleave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch onClick={() =>handleChangePage(page,totalPage)}>换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null;
		}
	}

	render() {
		const { focused,handleInputFocus,handleInputBlur,list,login,logout } = this.props;
		return (
			<HeaderWrapper>
				<Link to='/'>
					<Logo />
				</Link>
				<Nav>
					<Link to='/'>
					<NavItem className='left active'>首页</NavItem>
					</Link>
					<NavItem className='left'>下载App</NavItem>
					{
						login?<NavItem onClick={logout} className='right exit'>退出</NavItem>:
							<Link to='/login'><NavItem className='right'>登录</NavItem></Link>
					}
					
					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={500}
							classNames="slide"
						>
							<NavSearch
								className={focused?'focused':''}
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused?'focused iconfont':'iconfont'}>&#xe637;</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='writting'>
						<i className="iconfont">&#xe616;</i>写文章
					</Button>
					<Button className='register'>注册</Button>
				</Addition>
			</HeaderWrapper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header','focused']),
		list: state.getIn(['header','list']),
		page: state.getIn(['header','page']),
		totalPage: state.getIn(['header','totalPage']),
		mouseIn: state.getIn(['header','mouseIn']),
		login: state.getIn(['login','login'])
	}
};
const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			if (list.size === 0) {
				dispatch(actionCreators.getList());
			}
			// (list.size===0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		headleMouseEnter () {
			dispatch(actionCreators.mouseEnter());
		},
		headleMouseleave () {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage (page,totalPage) {
			if (page<totalPage) {
				dispatch(actionCreators.changePage(page+1));
			}else {
				dispatch(actionCreators.changePage(1));
			}
		},
		logout() {
			dispatch(loginActionCreators.logout())
		}
	}
};

export default connect(mapStateToProps,mapDispathToProps)(Header);