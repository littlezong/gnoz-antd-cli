import React from 'react';
import CollapsibleSearch from '../../components/CollapsibleSearch';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

import '../../style/portal.less';

export default class Portal extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			openKeys: ['sub1'],
			collapsed: false,
		};
		this.rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
	}
	
	render() {
		let {
			openKeys,
			collapsed
		} = this.state;
		let collapsedStyle = collapsed ? {display: 'none'} : {};
		let unCollapsedStyle = collapsed ? {} : {display: 'none'};
		return (
			<Layout id="portal">
				<Sider
					width={180}
					collapsedWidth={50}
					trigger={null}
					collapsible
					collapsed={collapsed}
				>
					<div className="logo" style={collapsedStyle}>
						{/*<img src={require('../../assets/logo.png')}/>*/}
						{/*<Divider style={{marginTop: 0, marginBottom: '5px', background: '#38546a'}} />*/}
						{/*<span>TITLE</span>*/}
					</div>
					<div className="logo" style={{padding: '0 25px', lineHeight: 0, ...unCollapsedStyle}}>
						{/*<img src={require('../../assets/logo.png')} style={{width: '62px', transformOrigin: 'left', transform: 'rotate(90deg)'}}/>*/}
					</div>
					<Menu theme="dark"
						  mode="inline"
						  defaultSelectedKeys={['1']}
						  defaultOpenKeys={['sub1']}
						  openKeys={openKeys}
						  onOpenChange={this.onOpenChange}>
						<SubMenu key="sub1" title={<span><Icon type="user" /><span>用户管理</span></span>}>
							<Menu.Item key="1">option1</Menu.Item>
							<Menu.Item key="2">option2</Menu.Item>
							<Menu.Item key="3">option3</Menu.Item>
							<Menu.Item key="4">option4</Menu.Item>
						</SubMenu>
						<SubMenu key="sub2" title={<span><Icon type="laptop" /><span>权限管理</span></span>}>
							<Menu.Item key="5">option5</Menu.Item>
							<Menu.Item key="6">option6</Menu.Item>
							<Menu.Item key="7">option7</Menu.Item>
							<Menu.Item key="8">option8</Menu.Item>
						</SubMenu>
						<SubMenu key="sub3" title={<span><Icon type="notification" /><span>平台管理</span></span>}>
							<Menu.Item key="9">option9</Menu.Item>
							<Menu.Item key="10">option10</Menu.Item>
							<Menu.Item key="11">option11</Menu.Item>
							<Menu.Item key="12">option12</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout>
					<Header>
						<Icon
							className="trigger"
							type={collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={this.toggle}
						/>
						<a className="menu-widget" href="javascript:void(0)">
							产品服务 <Icon type="down" />
						</a>
						<a className="menu-widget" href="javascript:void(0)">
							控制台
						</a>
						<a className="menu-widget" href="javascript:void(0)">
							统计
						</a>
						
						<CollapsibleSearch className="menu-widget" onSearch={this.handleSearch} />
						
						<a href="javascript:void(0)" className="avatar">
							<img src={require('../../assets/avatar.jpg')} />
							管理员
						</a>
					</Header>
					<Content style={{margin: '24px 12px', padding: '12px', background: '#fff'}}>
						{this.props.children}
					</Content>
				</Layout>
			</Layout>
		);
	}
	
	onOpenChange = (openKeys) => {
		const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
		if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			this.setState({ openKeys });
		} else {
			this.setState({
				openKeys: latestOpenKey ? [latestOpenKey] : [],
			});
		}
	}
	
	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}
	
	handleSearch = sText => {
		console.log('search text ' + sText);
	}
}