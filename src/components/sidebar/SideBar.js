import PropTypes from "prop-types";
import React, { Component } from "react";
import { Button, Header, Icon, Menu, Segment, Sidebar, Dropdown } from "semantic-ui-react";

const VerticalSidebar = ({ animation, direction, visible }) => (
	<Sidebar
    	as={Menu}
    	animation={animation}
    	direction={direction}
    	icon="labeled"
    	inverted
    	vertical
    	visible={visible}
    	width="thin"
  	>
  		<Menu.Item as="a">
			<Icon name="home" />
    	  	Home
    	</Menu.Item>
    	<Menu.Item as="a">
	      	<Icon name="gamepad" />
      		Student Info
    	</Menu.Item>
    	<Menu.Item as="a">
      		<Icon name="camera" />
      		Syllabus
    	</Menu.Item>
  	</Sidebar>
);

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool
};

class VanViaBar extends Component {
	state = {
	    animation: "push",
    	direction: "left",
    	dimmed: false,
    	visible: false
  	};

  	handleAnimationChange = animation => () => this.setState(prevState => ({ animation, visible: !prevState.visible }));

  	handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked });

  	handleDirectionChange = direction => () => this.setState({ direction, visible: false });

  	render() {
    	const { animation, dimmed, direction, visible } = this.state;
    	const vertical = direction === "bottom" || direction === "top";
		const style = {			
			'border': '0',
			'backgroundColor': '#2E86C1',
			'borderRadius': '0!important'
		}
		const content = {			
			'borderRadius': '0!important', 
			'border': 'none'
		}
    	return (
      	<div>
		  	<Menu size='large' style={style}>
				<Menu.Item name='home' disabled={vertical} onClick={this.handleAnimationChange("push")}>									
					<i className="icon content"></i>									
				</Menu.Item>
				<Menu.Item name='heading'>
					VanVia Dashboard
				</Menu.Item>
				<Menu.Menu position='right'>
					<Dropdown item text='Profile'>
						<Dropdown.Menu>
							<Dropdown.Item>Settings</Dropdown.Item>
							<Dropdown.Item>Notifications</Dropdown.Item>
							<Dropdown.Item>Inbox</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>					
				<Menu.Item>
					<Button primary>Log Out</Button>
				</Menu.Item>
				</Menu.Menu>
			</Menu>
        	<Sidebar.Pushable as={Segment}>          
          		{vertical ? null : (
            		<VerticalSidebar
              			animation={animation}
              			direction={direction}
              			visible={visible}
            		/>
          		)}
				<Sidebar.Pusher dimmed={dimmed && visible}>
					<Segment style={content}>															
						<Header as="h3">Application Content</Header>
							<p>
								Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...""There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed risus blandit, congue nunc nec, tincidunt dolor. Pellentesque vulputate lorem quis pretium pharetra. Pellentesque id sagittis lorem. Integer pretium, diam et efficitur semper, dolor enim interdum odio, ut auctor nisi massa ut tellus. Nam commodo nisi a eros ultrices aliquet. Vivamus feugiat varius nibh non fringilla. Vivamus dapibus vitae lacus nec pulvinar. Integer non nulla vel odio faucibus lobortis. Mauris nibh justo, convallis nec fringilla ut, accumsan sit amet dui. Nulla vel tellus id leo tristique efficitur non sed risus. Vestibulum ultricies viverra mollis. Maecenas nec iaculis ante, nec egestas ante.
								Donec non molestie justo. Nulla auctor sit amet mi ac ultricies. Integer vulputate, elit eget aliquam tincidunt, velit sem feugiat ipsum, eu varius elit sem at ante. Nunc aliquet, lorem at mollis imperdiet, elit massa auctor enim, quis rutrum risus est sit amet dolor. Cras molestie dictum mattis. Proin consequat nunc eget massa aliquet, at rutrum neque tempus. Aliquam varius volutpat ante, quis commodo ipsum ornare eget. Nunc dapibus diam ipsum, vitae venenatis neque elementum vitae.
								Phasellus vel nibh justo. Etiam mattis varius velit, in semper est. Pellentesque fringilla justo purus. Nulla vitae neque eget mauris tristique feugiat. Vivamus lorem urna, pulvinar sed ligula ac, suscipit auctor quam. Nulla vitae orci et ex ornare suscipit. Mauris nisl mauris, feugiat vitae dignissim sed, efficitur eleifend enim.
								Curabitur ornare, massa eget semper gravida, tortor nisi posuere urna, eu scelerisque nisl tortor sit amet magna. In hac habitasse platea dictumst. Curabitur laoreet porttitor leo vel cursus. In dictum arcu nec lorem sagittis, eu semper libero malesuada. Donec ultricies urna ut nisl finibus, ut sagittis lacus maximus. Donec placerat ligula porta leo fermentum, eu efficitur leo lacinia. Praesent ut ultrices purus. Praesent gravida quis ipsum vitae ullamcorper. Morbi vestibulum tincidunt justo, ac dictum ex tempus sed. Phasellus non varius mi. Duis in suscipit risus, vitae interdum neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum a odio elit.
								Quisque justo nisl, sollicitudin ac neque dapibus, pulvinar iaculis sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse eget vulputate lectus, vitae consequat nisl. Aliquam lacus tellus, aliquam vitae lectus et, rhoncus mollis nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et porttitor mi. Quisque malesuada tortor sed augue rhoncus auctor. Curabitur nec facilisis eros. Aenean condimentum at felis nec lobortis. Morbi vehicula risus lacinia, feugiat metus id, tempus nisi. Nulla facilisi. Vivamus dolor elit, vehicula nec massa eget, commodo efficitur ante. Pellentesque lacus neque, faucibus feugiat interdum vel, congue a lectus.
							</p>
					</Segment>
				</Sidebar.Pusher>
        	</Sidebar.Pushable>			
      	</div>
    );
  }
}

export default VanViaBar;