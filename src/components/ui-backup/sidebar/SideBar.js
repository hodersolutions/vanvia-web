import React, { Component, Fragment } from 'react';
import './SideBar.css';
import './SideBarjQuery.js';

export default class AcademeBar extends Component {
  render() {
    return (
        <Fragment>
      		<div>
      			<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
				<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
				<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
    			<link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet"/>
 
				<div className="page-wrapper chiller-theme toggled">
					<a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
						<i className="fas fa-bars"></i>
					</a>
					<nav id="sidebar" className="sidebar-wrapper">
						<div className="sidebar-content">
							<div className="sidebar-brand">
								<a href="/">pro sidebar</a>
								<div id="close-sidebar">
								<i className="fas fa-times"></i>
								</div>
							</div>
							<div className="sidebar-header">
								<div className="user-pic">
								<img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
									alt="Userpicture"/>
								</div>
								<div className="user-info">
								<span className="user-name">Jhon
									<strong>Smith</strong>
								</span>
								<span className="user-role">Administrator</span>
								<span className="user-status">
									<i className="fa fa-circle"></i>
									<span>Online</span>
								</span>
								</div>
							</div>
						
							<div className="sidebar-search">
								<div>
								<div className="input-group">
									<input type="text" className="form-control search-menu" placeholder="Search..."/>
									<div className="input-group-append">
									<span className="input-group-text">
										<i className="fa fa-search" aria-hidden="true"></i>
									</span>
									</div>
								</div>
								</div>
							</div>
						
							<div className="sidebar-menu">
								<ul>
								<li className="header-menu">
									<span>General</span>
								</li>
								<li className="sidebar-dropdown">
									<a href="#">
									<i className="fa fa-tachometer-alt"></i>
									<span>Dashboard</span>
									<span className="badge badge-pill badge-warning">New</span>
									</a>
									<div className="sidebar-submenu">
									<ul>
										<li>
										<a href="/">Dashboard 1
											<span className="badge badge-pill badge-success">Pro</span>
										</a>
										</li>
										<li>
										<a href="/">Dashboard 2</a>
										</li>
										<li>
										<a href="/">Dashboard 3</a>
										</li>
									</ul>
									</div>
								</li>
								<li className="sidebar-dropdown">
									<a href="#">
									<i className="fa fa-shopping-cart"></i>
									<span>E-commerce</span>
									<span className="badge badge-pill badge-danger">3</span>
									</a>
									<div className="sidebar-submenu">
									<ul>
										<li>
										<a href="/">Products

										</a>
										</li>
										<li>
										<a href="/">Orders</a>
										</li>
										<li>
										<a href="/">Credit cart</a>
										</li>
									</ul>
									</div>
								</li>
								<li className="sidebar-dropdown">
									<a href="#">
									<i className="far fa-gem"></i>
									<span>Components</span>
									</a>
									<div className="sidebar-submenu">
									<ul>
										<li>
										<a href="/">General</a>
										</li>
										<li>
										<a href="/">Panels</a>
										</li>
										<li>
										<a href="/">Tables</a>
										</li>
										<li>
										<a href="/">Icons</a>
										</li>
										<li>
										<a href="/">Forms</a>
										</li>
									</ul>
									</div>
								</li>
								<li className="sidebar-dropdown">
									<a href="#">
									<i className="fa fa-chart-line"></i>
									<span>Charts</span>
									</a>
									<div className="sidebar-submenu">
									<ul>
										<li>
										<a href="/">Pie chart</a>
										</li>
										<li>
										<a href="/">Line chart</a>
										</li>
										<li>
										<a href="/">Bar chart</a>
										</li>
										<li>
										<a href="/">Histogram</a>
										</li>
									</ul>
									</div>
								</li>
								<li className="sidebar-dropdown">
									<a href="#">
									<i className="fa fa-globe"></i>
									<span>Maps</span>
									</a>
									<div className="sidebar-submenu">
									<ul>
										<li>
										<a href="/">Google maps</a>
										</li>
										<li>
										<a href="/">Open street map</a>
										</li>
									</ul>
									</div>
								</li>
								<li className="header-menu">
									<span>Extra</span>
								</li>
								<li>
									<a href="/">
									<i className="fa fa-book"></i>
									<span>Documentation</span>
									<span className="badge badge-pill badge-primary">Beta</span>
									</a>
								</li>
								<li>
									<a href="/">
									<i className="fa fa-calendar"></i>
									<span>Calendar</span>
									</a>
								</li>
								<li>
									<a href="/">
									<i className="fa fa-folder"></i>
									<span>Examples</span>
									</a>
								</li>
								</ul>
							</div>
						</div>
						<div className="sidebar-footer">
							<a href="/">
								<i className="fa fa-bell"></i>
								<span className="badge badge-pill badge-warning notification">3</span>
							</a>
							<a href="/">
								<i className="fa fa-envelope"></i>
								<span className="badge badge-pill badge-success notification">7</span>
							</a>
							<a href="/">
								<i className="fa fa-cog"></i>
								<span className="badge-sonar"></span>
							</a>
							<a href="/">
								<i className="fa fa-power-off"></i>
							</a>
						</div>
					</nav>
					<main className="page-content">
						<div className="container-fluid">
						<h2>Academe Application Content</h2>
						<hr/>
						<div className="row">
							<div className="form-group col-md-12">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis magna semper, interdum tellus ut, tempus nulla. Sed neque ex, viverra vitae auctor vel, semper sed erat. Fusce eleifend turpis turpis, ac ornare nunc fermentum non. In quam lacus, laoreet vel vestibulum ac, dictum a nisl. Donec nec faucibus justo, id pharetra elit. Cras malesuada iaculis velit sed gravida. Nullam volutpat eros nec felis volutpat, a ultricies urna vulputate. Aliquam porta sodales justo id finibus. Curabitur tempus nisl at massa elementum euismod. Curabitur mollis tempus eros, at lobortis velit vehicula a.

								Vivamus cursus est augue, sit amet rhoncus lorem elementum a. Sed iaculis fringilla massa, quis viverra dolor vehicula molestie. Nam dui ante, imperdiet id malesuada at, aliquam quis tellus. Proin luctus imperdiet mauris feugiat pellentesque. Nulla efficitur ipsum sit amet condimentum accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque erat nisi, mattis ut vulputate sit amet, posuere in erat.

								Aliquam at euismod nulla, mattis ultricies ligula. Quisque pretium eros vitae elementum mattis. Maecenas turpis ligula, fermentum nec finibus non, luctus quis quam. Sed at molestie sapien. Cras aliquet, orci ut dignissim pellentesque, lacus justo faucibus ex, ac ultrices orci odio ut nibh. Phasellus convallis accumsan sapien in ultricies. Sed id sagittis orci. Vestibulum lacus mauris, venenatis at mauris quis, feugiat porta diam. Suspendisse potenti. Suspendisse et quam nec est porta tincidunt. Proin dictum sollicitudin efficitur.

								Vivamus ac velit mauris. Donec vitae arcu vel orci tempus dictum vel sed erat. Cras risus dui, tempor euismod est ultricies, pretium varius eros. Fusce at venenatis neque. Nam tempus cursus accumsan. Fusce vitae vehicula justo. Ut hendrerit velit eu tellus laoreet volutpat. Donec sit amet mollis nulla. Maecenas suscipit nunc at mollis dictum. Proin hendrerit sodales sapien, at malesuada justo vehicula at. Praesent nibh tellus, sodales eget malesuada vitae, dignissim quis purus. Praesent efficitur turpis quis consequat sollicitudin. Vestibulum pulvinar massa a est ultricies interdum.

								Morbi augue erat, lacinia sit amet semper eleifend, rhoncus non dui. Nullam lobortis orci et finibus sagittis. Donec iaculis aliquet ornare. Curabitur eget laoreet elit, et rhoncus lorem. Mauris in justo rhoncus, condimentum arcu non, euismod metus. Duis eros tellus, tincidunt malesuada consequat sit amet, laoreet vitae est. Suspendisse semper, nisi sed consectetur tincidunt, tellus quam commodo purus, sed facilisis dui velit mollis augue. Donec rhoncus risus eros. Nulla pellentesque, quam at tempus tincidunt, neque nulla gravida arcu, sit amet varius risus ante facilisis sapien.

								Vestibulum iaculis volutpat libero sed consectetur. Quisque porttitor lorem eget pharetra faucibus. Curabitur accumsan nulla sed arcu fermentum, vel sodales magna ultricies. Sed tristique ligula eu suscipit sodales. Etiam eu urna lectus. Aenean fringilla massa a massa finibus, ac efficitur ante accumsan. In mattis urna libero, ac egestas purus ultrices in. Donec vel elit in erat viverra condimentum auctor at leo.

								Maecenas ullamcorper est risus, sed efficitur neque egestas a. Praesent et tempus lectus. Integer euismod risus mattis lectus tristique imperdiet. Suspendisse tristique vel enim in sodales. Integer blandit lobortis est, ac placerat nunc euismod sed. Vivamus orci libero, accumsan a dictum sit amet, pellentesque in urna. Maecenas luctus sapien eu tristique cursus. Curabitur aliquam sem tincidunt aliquet auctor. Sed non purus turpis. Proin mattis metus id mollis efficitur. Pellentesque vitae blandit lacus.

								Morbi ac massa quis nulla venenatis hendrerit. Cras placerat ligula id velit condimentum hendrerit. Donec aliquam lacus eros, eu volutpat ipsum aliquam ac. Sed faucibus pretium aliquet. Mauris lectus enim, auctor at hendrerit nec, lacinia facilisis diam. Cras vestibulum elit sed sapien elementum accumsan. Sed tortor est, lobortis non mi feugiat, volutpat vehicula dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

								Etiam ut pharetra lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent vitae magna sem. Nam maximus arcu odio, sit amet fermentum ex porta in. Suspendisse non diam elementum, luctus massa at, feugiat turpis. Nullam condimentum tortor vel ligula ornare porta ut sed risus. Donec egestas nisl ligula, sit amet fringilla urna pellentesque sit amet. Morbi lectus erat, pretium et tincidunt ut, sagittis eu mi. In hac habitasse platea dictumst. Sed vulputate erat magna, in rutrum orci sollicitudin sit amet. Nam rhoncus, leo nec fringilla pretium, purus lectus mollis nisi, vel bibendum dui ante sit amet sapien. Mauris tincidunt tincidunt metus id porttitor. Donec dapibus eleifend mi sit amet malesuada. In ut sem quam. Maecenas venenatis viverra leo, in sollicitudin orci luctus et. Aenean malesuada sapien in risus ultricies, non hendrerit nisl pulvinar.

								Aliquam viverra auctor sagittis. Nulla facilisi. Aenean elit nisl, commodo id convallis quis, tincidunt eu ex. In id fermentum tellus. Fusce rhoncus egestas odio, non facilisis enim iaculis sit amet. Mauris sed tellus dui. Vestibulum quis magna sed augue facilisis bibendum sit amet ut magna. Phasellus scelerisque lectus ut enim faucibus euismod. Etiam malesuada, odio vel sagittis malesuada, erat purus pulvinar lectus, eget dignissim ex purus vitae velit. Ut ac odio id purus blandit porta vitae et tortor. In fringilla pharetra neque sed luctus. Vivamus ut dui ex. Fusce a gravida justo. Nam quis semper purus, sit amet varius dolor.
							</p>
							</div>
						</div>
						<h5>More templates</h5>
						<hr/>
						<div className="row">
							<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">          
							<div className="card rounded-0 p-0 shadow-sm">
								<img src="https://user-images.githubusercontent.com/25878302/58369568-a49b2480-7efc-11e9-9ca9-2be44afacda1.png" className="card-img-top rounded-0" alt="Angular pro sidebar"/>
								<div className="card-body text-center">
									<h6 className="card-title">Angular Pro Sidebar</h6>
									<a href="https://github.com/azouaoui-med/angular-pro-sidebar" className="btn btn-primary btn-sm">Github</a>
									<a href="https://azouaoui-med.github.io/angular-pro-sidebar/demo/" className="btn btn-success btn-sm">Preview</a>
								</div>
							</div>          
							</div>
							<div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">          
								<div className="card rounded-0 p-0 shadow-sm">
									<img src="https://user-images.githubusercontent.com/25878302/58369258-33f20900-7ef8-11e9-8ff3-b277cb7ed7b4.PNG" className="card-img-top rounded-0" alt="Angular pro sidebar"/>
									<div className="card-body text-center">
										<h6 className="card-title">Angular Dashboard</h6>
										<a href="https://github.com/azouaoui-med/lightning-admin-angular" className="btn btn-primary btn-sm">Github</a>
										<a href="https://azouaoui-med.github.io/lightning-admin-angular/demo/" className="btn btn-success btn-sm">Preview</a>
									</div>
								</div>          
							</div>
						</div>
						</div>
					</main>
				</div>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
			</div>
      </Fragment>
    )
  }
}
