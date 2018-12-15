import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`;
export const HomeLeft = styled.div`
	position: relative;
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
`;
export const LunboBox = styled.div`
	position: absolute;
	overflow: hidden;
	width: 625px;
	height:270px;
	.banner-img {
		float: left;
		width: 625px;
		height:270px;
		padding-bottom: 30px;
		border-bottom: 1px solid #dcdcdc;
	}
	.lunbotu:hover .arrow{ display: block;}
	.buttons {
		z-index: 2;
		position: absolute;
		bottom: 20px;
		left: 250px;
		span {
			cursor: pointer;
			float: left;
			width: 30px;
			height: 5px;
			background-color: hsla(0,0%,47%,.4);
			margin-right: 5px;
		}
        .on {
			background: #fff;
		}
	}
	.arrow {
		position: absolute;
		cursor: pointer;
		display: none;
		line-height: 50px;
		text-align: center;
		font-size: 30px;
		font-weight: bold;
		width: 40px;
		height: 50px;
		z-index: 2;
		top: 120px;
		background-color: RGBA(0,0,0,.5);
		color: #fff;
	}
	#prev {
		left: 0;
		border-radius: 0 5px 5px 0;
	}
    #next {
		right: 0;
		border-radius: 5px 0 0 5px;
	}
`;
export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;
export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px;
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;
export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	margin-bottom: 10px;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;
export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 27px;
		font-weight: 18px;
		color: #333;
	}
	.describe {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;
export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;
export const RecommendItem = styled.div`
	width: 280px;
	height: 46px;
	border-radius: 5px;
	margin: 10px 0;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;
export const WriterWrapper = styled.div`
	width: 278px;
	border-radius: 4px;
	height: 300px;
	font-size: 14px;
	color: #969696;
	.change {
		float: right;
		text-decoration: none;
		color: #969696;
	}
`;
export const WriterItem = styled.div`
	position: relative;
	img {
		width: 48px;
		height: 48px;
		margin: 10px 0;
	}
`;
export const WriterInfo = styled.div`
	position: absolute;
	top: 18px;
	left: 68px;
	.autor {
		color: #2f2f2f;
		padding-bottom: 10px;
	}
	.words {
		font-size: 12px;
	}
`;
export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	margin: 30px 0;
	line-height: 40px;
	background: #a5a5a5;
	text-align: center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;