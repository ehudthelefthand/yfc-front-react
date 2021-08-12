import { Dashboard } from '@material-ui/icons'
import React from 'react'
import { ListItemIcon,
         ListItem,
         ListItemText,
} from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'
import GroupWorkIcon from '@material-ui/icons/GroupWork'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import ReceiptIcon from '@material-ui/icons/Receipt'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import PaymentIcon from '@material-ui/icons/Payment'
import VpnKeyIcon from '@material-ui/icons/VpnKey'

function ListItemLink(props){
    return <ListItem button component="a" {...props}/>;
}

export const mainListItems = (

    <div class="root">
        <ListItem button>
            <ListItemIcon>
                <MonetizationOnIcon/>
            </ListItemIcon>
            <ListItemText primary="Give" />
        </ListItem>

        <ListItemLink href="/receipt">
            <ListItemIcon>
                <ReceiptIcon/>
            </ListItemIcon>
            <ListItemText primary="Receipt" />
        </ListItemLink>

        <ListItemLink href="/department">
            <ListItemIcon>
                <GroupWorkIcon/>
            </ListItemIcon>
            <ListItemText primary="Department" />
        </ListItemLink>

        <ListItemLink href="/staff">
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Staff" />
        </ListItemLink>

        <ListItemLink href="/supporter">
            <ListItemIcon>
                <HelpOutlineIcon/>
            </ListItemIcon>
            <ListItemText primary="Supporter" />
        </ListItemLink>

        <ListItemLink href="/paymenttype">
            <ListItemIcon>
                <PaymentIcon/>
            </ListItemIcon>
            <ListItemText primary="Payment Type" />
        </ListItemLink>

        <ListItemLink href="/givetype">
            <ListItemIcon>
                <CardGiftcardIcon/>
            </ListItemIcon>
            <ListItemText primary="Give Type" />
        </ListItemLink>

        <ListItemLink href="/login">
            <ListItemIcon>
                <VpnKeyIcon/>
            </ListItemIcon>
            <ListItemText primary="Login" />
        </ListItemLink>

        <ListItemLink href="/dashboard">
            <ListItemIcon>
                <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashborad" />
        </ListItemLink>

    </div>
);

// export const secondaryListItems = (
//     <div>
//         <ListSubheader inset> Svaed Reports </ListSubheader>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Current Month" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Last quarter" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//              <ListItemText primary="Year-end sale" />
//         </ListItem>
//     </div>
// );