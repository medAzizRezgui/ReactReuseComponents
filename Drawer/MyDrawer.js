import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import './drawerBody.scss'

export default function MyDrawer(props) {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className='drawer__container'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {props.children}
        </div>
    );

    return (
        <div>
            <React.Fragment key={"left"}>
                <button onClick={toggleDrawer("left", true)}>{props.side}</button>
                <Drawer className='drawer__backdrop' anchor={props.side} open={state["left"]} onClose={toggleDrawer("left", false)}>
                    {list("left")}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
