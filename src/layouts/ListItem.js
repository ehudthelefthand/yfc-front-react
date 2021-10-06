import { Dashboard } from '@mui/icons-material'
import React from 'react'
import { ListItemIcon,
         ListItem,
         ListItemText,
} from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'
import GroupWorkIcon from '@mui/icons-material/GroupWork'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import ReceiptIcon from '@mui/icons-material/Receipt'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import PaymentIcon from '@mui/icons-material/Payment'
import VpnKeyIcon from '@mui/icons-material/VpnKey'


function ListItemLink(props){
    return <ListItem button {...props}/>;
}

export const MainListItems = (

export const MainListItems = (
    <div>
        <ListItemLink href="/give">
            <ListItemIcon>
                <MonetizationOnIcon/>
            </ListItemIcon>
            <ListItemText primary="Give" />
        </ListItemLink>

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
    </div>
)

export const SecondaryListItems = (
    <div>
        <ListSubheader inset> Saved Reports </ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <PaymentIcon/>
            </ListItemIcon>
            <ListItemText primary="Payment Type" />
        </ListItem>
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
)
