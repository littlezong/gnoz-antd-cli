import React from 'react';
import { Icon } from 'antd';

import '../style/collapsible-search.less';

export default class CollapsibleSearch extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			searchCollapsed: true
		};
	}
	
	static defaultProps = {
		className: '',
		onSearch: (sText) => {
			console.log(sText);
		}
	}
	
	render(){
		let {
			searchCollapsed
		} = this.state;
		let {
			className,
			onSearch
		} = this.props;
		let searchCls = searchCollapsed ? '' : 'search-blank-uncollapsed';
		return (
			<span className={`${className} ${searchCls}`} href="javascript:void(0)">
				<input type="text" className="search-blank" ref={t => this.searchText = t} />
				<Icon type="search" onClick={() => {
					let sText = this.searchText.value.trim();
					if(sText === ''){
						let sCollapsed = this.state.searchCollapsed;
						this.setState({
							searchCollapsed: !sCollapsed
						}, () => {
							if(sCollapsed){
								this.searchText.focus();
							}
						});
					}else{
						onSearch(sText);
					}
				}} />
			</span>
		)
	}
}