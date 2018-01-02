import React from 'react';
import { Steps } from 'antd';
const Step = Steps.Step;

export default class Guide extends React.Component{
	render(){
		return (
			<div>
				<h3>新手教学(超级简单)</h3>
				<p>比如如何显示建立并显示该页面：</p>
				<Steps direction="vertical" current={0}>
					<Step title="新建页面" description="在views下新建Guide(组件则新建在components下)" />
					<Step title="配置路由" description="打开route.jsx并配置相关路由" />
					<Step title="查看浏览器" description="如无错误，页面正常跑起(就是该页面啦)" />
					<Step title="可喜可贺" description="获得经验+99" />
				</Steps>
			</div>
		)
	}
}