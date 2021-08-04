import { Dashboard } from '@material-ui/icons'
import React from 'react'
import { ListItemIcon,
         ListItem,
         ListItemText,
} from '@material-ui/core'
import {ShoppingCartIcon} from '@material-ui/icons/ShoppingCart'

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <Dashboard/>
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <ShoppingCartIcon/>
            </ListItemIcon>
        </ListItem>
    </div>
);